import BarChart from "@/components/BarChart";
import Card from "@/components/Card";
import MonthPicker from "@/components/MonthPicker";
import NextPrevControl from "@/components/NextPrevControl";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import { useGetService } from "@/hooks/setting/useService";
import { Bulan } from "@/utils/types/tanggal";
import React, { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

const LaporanLayanan = () => {
  const [tanggal, setTanggal] = useState<Date>(new Date());
  const [bulan, setBulan] = useState<`${Bulan} ${number}`>("Januari 2025");

  const handlePrevMonth = () => {};
  const handleNextMonth = () => {};

  const { data, isLoading, refetch } = useGetService();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
    >
      <Wrapper padding={20} gap={20}>
        <MonthPicker value={bulan} onChange={setBulan} />

        <Card
          header={
            <Wrapper
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Wrapper>
                <Text variant="menutitle">Laporan layanan</Text>
                <Text variant="small" style={{ opacity: 0.5 }}>
                  Bulan {bulan}
                </Text>
              </Wrapper>
              <NextPrevControl
                hanleNext={handleNextMonth}
                handlePrev={handlePrevMonth}
              />
            </Wrapper>
          }
        >
          <BarChart
            wrapperStyle={{ marginVertical: 30 }}
            data={data?.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
          />
          <Wrapper gap={5}>
            {data?.map((item) => (
              <Wrapper
                flexDirection="row"
                justifyContent="space-between"
                key={item.id}
              >
                <Text>{item.name}</Text>
                <Text>{item.id}</Text>
              </Wrapper>
            ))}
          </Wrapper>
        </Card>
      </Wrapper>
    </ScrollView>
  );
};

export default LaporanLayanan;
