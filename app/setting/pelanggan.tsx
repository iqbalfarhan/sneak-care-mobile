import IconButton from "@/components/IconButton";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import SwipeAction from "@/components/SwipeAction";
import Wrapper from "@/components/Wrapper";
import CreatePelanggan from "@/components/pelanggan/CreatePelanggan";
import EditPelanggan from "@/components/pelanggan/EditPelanggan";
import PelangganItem from "@/components/pelanggan/PelangganItem";
import {
  useDeleteCustomer,
  useGetCustomers,
} from "@/hooks/setting/useCustomer";
import React, { useState } from "react";
import { RefreshControl, ScrollView, ToastAndroid } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const PelangganScreen = () => {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, isRefetching, refetch } = useGetCustomers();

  const deleteCustomer = useDeleteCustomer();

  if (isLoading) return <Loading />;

  return (
    <GestureHandlerRootView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading || isRefetching}
            onRefresh={refetch}
          />
        }
      >
        <Wrapper padding={20} gap={20}>
          <Input
            placeholder={`Cari dari ${data?.length} pelanggan`}
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
              .map((item) => (
                <SwipeAction
                  key={item.id}
                  actions={
                    <>
                      <EditPelanggan pelanggan={item} />
                      <IconButton
                        color="base"
                        size="small"
                        icon="trash"
                        disabled={deleteCustomer.isPending}
                        onPress={() =>
                          deleteCustomer
                            .mutateAsync(item.id)
                            .then(() =>
                              ToastAndroid.show(
                                `${item.name} berhasil dihapus`,
                                ToastAndroid.SHORT,
                              ),
                            )
                        }
                      />
                    </>
                  }
                >
                  <PelangganItem pelanggan={item} />
                </SwipeAction>
              ))}
          </Wrapper>

          <CreatePelanggan />
        </Wrapper>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default PelangganScreen;
