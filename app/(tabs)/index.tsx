import Input from "@/components/Input";
import TabPill from "@/components/TabPill";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import EarningCard from "@/components/dashboard/EarningCard";
import InvoicesResume from "@/components/dashboard/InvoicesResume";
import SmallUserInfo from "@/components/dashboard/SmallUserInfo";
import ScanInvoiceQr from "@/components/invoice/ScanInvoiceQr";
import { useColor } from "@/hooks/useColor";
import apiOrder from "@/utils/apis/apiOrder";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView } from "react-native";

const index = () => {
  const [tab, setTab] = useState<string>("Laporan");
  const data = apiOrder.getOrders();
  const { color } = useColor();

  const [search, setSearch] = useState<string>("");
  return (
    <Wrapper flex={1}>
      <Wrapper padding={20} gap={20}>
        <SmallUserInfo />
        <Wrapper gap={10} flex={0}>
          <Wrapper flexDirection="row" gap={10}>
            <Input
              placeholder="Pencarian invoice"
              value={search}
              onChangeText={setSearch}
              wrapperStyle={{ flex: 1 }}
              onEndEditing={() => {
                router.push({
                  pathname: "/invoice/[id]",
                  params: { id: search },
                });
              }}
            />
            <ScanInvoiceQr />
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper
        gap={20}
        padding={20}
        flex={1}
        borderTopWidth={2}
        borderColor={color.card.bg}
      >
        <TabPill
          options={["Pendapatan", "Laporan", "Invoices"]}
          active={tab}
          setActive={setTab}
          wrapperStyle={{ justifyContent: "center" }}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            borderRadius: 10,
          }}
        >
          {tab === "Pendapatan" && (
            <Wrapper gap={10}>
              <EarningCard />
            </Wrapper>
          )}

          {tab === "Laporan" && (
            <Wrapper gap={10}>
              <Text variant="subtitle">Laporan bulanan</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                praesentium eveniet earum doloremque vel nihil voluptates
                impedit repudiandae quos cum libero voluptatum, consectetur fuga
                assumenda molestias repellat consequatur nesciunt atque?
              </Text>
            </Wrapper>
          )}

          {tab === "Invoices" && <InvoicesResume />}
        </ScrollView>
      </Wrapper>
    </Wrapper>
  );
};

export default index;
