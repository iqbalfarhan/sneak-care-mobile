import IconButton from "@/components/IconButton";
import Input from "@/components/Input";
import CreateLayanan from "@/components/layanan/CreateLayanan";
import EditLayanan from "@/components/layanan/EditLayanan";
import LayananItem from "@/components/layanan/LayananItem";
import Loading from "@/components/Loading";
import SwipeAction from "@/components/SwipeAction";
import Wrapper from "@/components/Wrapper";
import { useDeleteService, useGetService } from "@/hooks/setting/useService";
import React, { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const LayananScreen = () => {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, refetch } = useGetService();

  const deleteLayanan = useDeleteService();

  if (isLoading) return <Loading />;

  return (
    <GestureHandlerRootView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      >
        <Wrapper padding={20} gap={20}>
          <Input
            placeholder="Cari layanan..."
            value={search}
            onChangeText={setSearch}
          />
          <Wrapper gap={5}>
            {data
              ?.filter((item) =>
                item.name
                  .toString()
                  .toLowerCase()
                  .includes(search.toLowerCase()),
              )
              .map((data) => (
                <SwipeAction
                  key={data.id}
                  actions={
                    <>
                      <EditLayanan layanan={data} />
                      <IconButton
                        size="small"
                        color="base"
                        icon="trash"
                        disabled={deleteLayanan.isPending}
                        onPress={() => deleteLayanan.mutateAsync(data.id)}
                      />
                    </>
                  }
                >
                  <LayananItem layanan={data} />
                </SwipeAction>
              ))}
          </Wrapper>
          <CreateLayanan />
        </Wrapper>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default LayananScreen;
