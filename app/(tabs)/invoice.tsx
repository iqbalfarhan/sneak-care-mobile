import Input from "@/components/Input";
import InvoiceItem from "@/components/invoice/InvoiceItem";
import ScanInvoiceQr from "@/components/invoice/ScanInvoiceQr";
import TabPill from "@/components/TabPill";
import Wrapper from "@/components/Wrapper";
import apiOrder from "@/utils/apis/apiOrder";
import { OrderStatus } from "@/utils/types/order";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

const InvoiceScreen = () => {
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<OrderStatus | "">("");
  const statusLists: ("" | OrderStatus)[] = [
    "",
    "draft",
    "progress",
    "done",
    "canceled",
    "complete",
  ];

  const data = apiOrder.getOrders();
  return (
    <Wrapper flex={1}>
      <Wrapper flex={0} gap={10}>
        <Wrapper flexDirection="row" gap={10} padding={20} paddingBottom={0}>
          <Input
            placeholder="Cari invoice..."
            value={search}
            onChangeText={setSearch}
            style={{ flex: 1 }}
            wrapperStyle={{ flex: 1 }}
          />
          <ScanInvoiceQr />
        </Wrapper>
        <Wrapper flexDirection="row" gap={5} flexWrap="wrap" paddingBottom={10}>
          <ScrollView
            horizontal
            contentContainerStyle={{ gap: 5, paddingHorizontal: 20 }}
          >
            <TabPill
              options={statusLists}
              active={status as string}
              setActive={(status) => setStatus(status as OrderStatus)}
            />
          </ScrollView>
        </Wrapper>
      </Wrapper>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          gap: 5,
          padding: 20,
        }}
      >
        {data
          .filter((item) =>
            item.invoice_no
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) && status?.toString() === ""
              ? true
              : status == item.status,
          )
          .map((order) => (
            <TouchableOpacity
              key={order.id}
              onPress={() => router.push(`/invoice/${order.id}`)}
            >
              <InvoiceItem invoice={order} />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </Wrapper>
  );
};

export default InvoiceScreen;
