import DropdownTeknisi from "@/components/laporan/DropdownTeknisi";
import MonthPicker from "@/components/MonthPicker";
import Wrapper from "@/components/Wrapper";
import { useGetKaryawan } from "@/hooks/setting/useKaryawan";
import React from "react";
import { RefreshControl, ScrollView } from "react-native";

const LaporanTeknisi = () => {
  const { data, isLoading, refetch } = useGetKaryawan();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
    >
      <Wrapper padding={20} gap={20}>
        <MonthPicker value="Februari 2025" onChange={() => {}} />
        <Wrapper gap={5}>
          {data
            ?.filter((item) => item.role === "teknisi")
            .map((item) => <DropdownTeknisi key={item.id} karyawan={item} />)}
        </Wrapper>
      </Wrapper>
    </ScrollView>
  );
};

export default LaporanTeknisi;
