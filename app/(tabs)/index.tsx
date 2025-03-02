import Avatar from "@/components/Avatar";
import Input from "@/components/Input";
import TabPill from "@/components/TabPill";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import EarningCard from "@/components/dashboard/EarningCard";
import InvoiceItem from "@/components/invoice/InvoiceItem";
import ScanInvoiceQr from "@/components/invoice/ScanInvoiceQr";
import { useColor } from "@/hooks/useColor";
import { useSession } from "@/hooks/useSession";
import apiOrder from "@/utils/apis/apiOrder";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

const index = () => {
  const { session } = useSession();
  const [tab, setTab] = useState<string>("Laporan");
  const data = apiOrder.getOrders();
  const { color } = useColor();
  return (
    <Wrapper flex={1}>
      <Wrapper padding={20} gap={20}>
        <Wrapper
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          flex={0}
        >
          <Wrapper gap={0}>
            <Text variant="menutitle">Hallo, iqbal farhan</Text>
            <Text variant="label">Good morning there!</Text>
          </Wrapper>
          <Avatar
            fallback="IF"
            src={{
              uri: "https://api.dicebear.com/9.x/dylan/png?seed=mikami&mood=sad",
            }}
          />
        </Wrapper>
        <Wrapper gap={10} flex={0}>
          <Wrapper flexDirection="row" gap={10}>
            <Input placeholder="Pencarian invoice" wrapperStyle={{ flex: 1 }} />
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

          {tab === "Invoices" && (
            <Wrapper gap={5}>
              {data.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    router.push({
                      pathname: "/invoice/[id]",
                      params: { id: item.id },
                    })
                  }
                >
                  <InvoiceItem invoice={item} />
                </TouchableOpacity>
              ))}
            </Wrapper>
          )}
        </ScrollView>
      </Wrapper>
    </Wrapper>
  );
};

export default index;
