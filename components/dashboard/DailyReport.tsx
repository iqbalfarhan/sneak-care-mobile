import React from "react";
import Card from "../Card";
import Text from "../Text";
import Wrapper from "../Wrapper";

const DailyReport = () => {
  return (
    <Card>
      <Wrapper gap={20}>
        <Text variant="title">Report Harian</Text>
        <Text variant="label">Tanggal: 15 November 2022</Text>
        <Text variant="label">Jam: 10:00 AM</Text>
        <Text variant="label">Total Transaksi: 10</Text>
        <Text variant="label">Total Pendapatan: Rp. 100.000</Text>
        <Text variant="label">Total Pengeluaran: Rp. 50.000</Text>
        <Text variant="label">Profit: Rp. 50.000</Text>
      </Wrapper>
    </Card>
  );
};

export default DailyReport;
