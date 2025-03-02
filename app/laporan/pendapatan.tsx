import BarChart, { BarItem } from "@/components/BarChart";
import Card from "@/components/Card";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import { useColor } from "@/hooks/useColor";
import { formatRupiah } from "@/utils/helpers/currency";
import React, { useState } from "react";
import { ScrollView } from "react-native";

const data: BarItem[] = [
  { label: "Januari", value: 100000 },
  { label: "Februari", value: 150000 },
  { label: "Maret", value: 200000 },
  { label: "April", value: 50000 },
  { label: "Mei", value: 120000 },
  { label: "Juni", value: 160000 },
];

const LaporanPendapatan = () => {
  const { color } = useColor();
  const [tanggal, setTanggal] = useState<Date>(new Date());

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Wrapper padding={20} gap={20}>
        <Card
          header={
            <Wrapper>
              <Text>Pendapatan 6 bulan</Text>
              <Text variant="small" style={{ opacity: 0.5 }}>
                Januari 2025 - Juni 2025
              </Text>
            </Wrapper>
          }
        >
          <BarChart
            data={data}
            valueType={"currency"}
            wrapperStyle={{ marginVertical: 30 }}
          />
          <Wrapper gap={5}>
            {data.map((item, index) => (
              <Wrapper
                key={index}
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text>{item.label}</Text>
                <Text>{formatRupiah(item.value)}</Text>
              </Wrapper>
            ))}
          </Wrapper>
        </Card>
      </Wrapper>
    </ScrollView>
  );
};

export default LaporanPendapatan;
