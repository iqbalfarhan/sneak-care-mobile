import MenuItem from "@/components/MenuItem";
import Wrapper from "@/components/Wrapper";
import { router } from "expo-router";
import React from "react";

const LaporanScreen = () => {
  return (
    <Wrapper padding={20} gap={20}>
      <Wrapper gap={5}>
        <MenuItem
          title="Pendapatan"
          subtitle="kinerja setiap teknisi"
          icon="credit-card"
          onPress={() => router.push("/laporan/pendapatan")}
        />
        <MenuItem
          title="Kinerja teknisi"
          subtitle="kinerja setiap teknisi"
          icon="people"
          onPress={() => router.push("/laporan/teknisi")}
        />
        <MenuItem
          title="Layanan"
          subtitle="kinerja setiap teknisi"
          icon="copy"
          onPress={() => router.push("/laporan/layanan")}
        />
      </Wrapper>
    </Wrapper>
  );
};

export default LaporanScreen;
