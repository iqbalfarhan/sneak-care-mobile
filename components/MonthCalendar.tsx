import { Bulan } from "@/utils/types/tanggal";
import React, { FC, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import NextPrevControl from "./NextPrevControl";
import Text from "./Text";
import Wrapper from "./Wrapper";

type MonthCalendarProps = {
  value: `${Bulan} ${number}`;
  onChange: (value: `${Bulan} ${number}`) => void;
};

const MonthCalendar: FC<MonthCalendarProps> = ({ value, onChange }) => {
  const [month, year] = value.split(" ");
  const [bulan, setBulan] = useState<Bulan>(month as Bulan);
  const [tahun, setTahun] = useState<number>(parseInt(year));

  const monthList = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const handlePrevYear = () => setTahun((year) => year - 1);
  const handleNextYear = () => setTahun((year) => year + 1);

  return (
    <Card
      header={
        <Wrapper
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Wrapper>
            <Text variant="menutitle">{tahun}</Text>
          </Wrapper>
          <NextPrevControl
            hanleNext={handleNextYear}
            handlePrev={handlePrevYear}
          />
        </Wrapper>
      }
    >
      <Wrapper flexDirection="row" flexWrap="wrap">
        {monthList.map((item, index) => (
          <Wrapper key={index} width={`${100 / 2}%`} padding={2}>
            <Button
              label={item}
              color={item === bulan ? "primary" : "input"}
              onPress={() => {
                setBulan(item as Bulan);
              }}
            />
          </Wrapper>
        ))}
      </Wrapper>

      <Button
        label={`Pilih ${bulan} ${tahun}`}
        icon="check"
        onPress={() => onChange(`${bulan} ${tahun}`)}
      />
    </Card>
  );
};

export default MonthCalendar;
