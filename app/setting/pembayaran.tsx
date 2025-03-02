import IconButton from "@/components/IconButton";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import CreatePembayaran from "@/components/pembayaran/CreatePembayaran";
import EditPembayaran from "@/components/pembayaran/EditPembayaran";
import PembayaranItem from "@/components/pembayaran/PembayaranItem";
import SwipeAction from "@/components/SwipeAction";
import Wrapper from "@/components/Wrapper";
import { useDeletePayment, useGetPayment } from "@/hooks/setting/usePayment";
import React, { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const PembayaranScreen = () => {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, refetch } = useGetPayment();

  const deletePayment = useDeletePayment();

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
            placeholder="Cari pembayaran..."
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
              .map((pembayaran) => (
                <SwipeAction
                  key={pembayaran.id}
                  actions={
                    <>
                      <EditPembayaran pembayaran={pembayaran} />
                      <IconButton
                        size="small"
                        icon="trash"
                        color="card"
                        disabled={deletePayment.isPending}
                        onPress={() => deletePayment.mutate(pembayaran.id)}
                      />
                    </>
                  }
                >
                  <PembayaranItem pembayaran={pembayaran} />
                </SwipeAction>
              ))}
          </Wrapper>
          <CreatePembayaran />
        </Wrapper>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default PembayaranScreen;
