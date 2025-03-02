import CreateDiskon from "@/components/diskon/CreateDiskon";
import DiskonItem from "@/components/diskon/DiskonItem";
import EditDiskon from "@/components/diskon/EditDiskon";
import IconButton from "@/components/IconButton";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import SwipeAction from "@/components/SwipeAction";
import TabPill from "@/components/TabPill";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import { useDeleteDiscount, useGetDiscount } from "@/hooks/setting/useDiskon";
import React, { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const DiskonScreen = () => {
  const { data, refetch, isLoading } = useGetDiscount();
  const [activeTab, setActiveTab] = useState("");
  const deleteDiscount = useDeleteDiscount();

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
          <Input placeholder="Pencarian..." />
          <TabPill
            options={["", "Potongan persen", "Potongan nominal"]}
            active={activeTab}
            setActive={setActiveTab}
          />
          <Wrapper gap={5}>
            {data
              ?.filter((item) =>
                activeTab === ""
                  ? true
                  : activeTab === "Potongan persen"
                    ? item.type === "percent"
                    : item.type === "amount",
              )
              .map((diskon) => (
                <SwipeAction
                  key={diskon.id}
                  actions={
                    <>
                      <EditDiskon diskon={diskon} />
                      <IconButton
                        size="small"
                        icon="trash"
                        color="card"
                        onPress={() => deleteDiscount.mutate(diskon.id)}
                        disabled={deleteDiscount.isPending}
                      />
                    </>
                  }
                >
                  <DiskonItem diskon={diskon} />
                </SwipeAction>
              ))}
          </Wrapper>
          <CreateDiskon />
          <Text variant="label" style={{ opacity: 0.5 }}>
            *Diskon yang berlaku hanya untuk harga jasa pencucian sepatu. tidak
            termasuk biaya pengiriman.
          </Text>
        </Wrapper>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default DiskonScreen;
