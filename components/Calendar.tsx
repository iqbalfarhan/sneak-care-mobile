import { useColor } from "@/hooks/useColor";
import { formatDate, sliceText } from "@/utils/helpers/text";
import React, { FC, useState } from "react";
import { TouchableOpacity } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import Button from "./Button";
import Card from "./Card";
import NextPrevControl from "./NextPrevControl";
import Text from "./Text";
import Wrapper from "./Wrapper";

const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const months = [
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
const generateCalendarDays = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startDayIndex = firstDayOfMonth.getDay();
  const totalDays = 42; // Ensures full 6 rows for consistency
  const daysArray = [];

  // Days from previous month
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startDayIndex - 1; i >= 0; i--) {
    daysArray.push({ date: prevMonthLastDay - i, isCurrentMonth: false });
  }

  // Days from current month
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    daysArray.push({ date: i, isCurrentMonth: true });
  }

  // Days from next month
  const remainingDays = totalDays - daysArray.length;
  for (let i = 1; i <= remainingDays; i++) {
    daysArray.push({ date: i, isCurrentMonth: false });
  }

  return daysArray;
};

type CalendarProps = {
  value: Date;
  onChange: (date: Date) => void;
};

const Calendar: FC<CalendarProps> = ({ value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(value);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const calendarDays = generateCalendarDays(currentYear, currentMonth);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
  };

  return (
    <Card
      header={
        <Wrapper
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Wrapper>
            <Text variant="menutitle">
              {months[currentMonth]} {currentYear}
            </Text>
          </Wrapper>
          <NextPrevControl
            hanleNext={handleNextMonth}
            handlePrev={handlePrevMonth}
          />
        </Wrapper>
      }
    >
      <Wrapper flexDirection="row">
        {days.map((day, index) => (
          <Text key={index} align="center" style={{ flex: 1 }}>
            {sliceText(day, 3)}
          </Text>
        ))}
      </Wrapper>
      <Wrapper
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {calendarDays.map((day, index) => (
          <Wrapper
            key={index}
            width={`${100 / 7}%`}
            aspectRatio={1}
            justifyContent="center"
            alignItems="center"
            padding={4}
          >
            <DayItem
              disabled={!day.isCurrentMonth}
              value={day.date}
              onPress={() => {
                setSelectedDate(
                  new Date([currentYear, currentMonth + 1, day.date].join("-")),
                );
              }}
              active={
                selectedDate.toDateString() ===
                new Date(
                  [currentYear, currentMonth + 1, day.date].join("-"),
                ).toDateString()
              }
            />
          </Wrapper>
        ))}
      </Wrapper>

      <Button
        label={`Pilih ${formatDate(new Date(selectedDate))}`}
        icon="check"
        onPress={() => {
          onChange(new Date(selectedDate));
        }}
      />
    </Card>
  );
};

type DayItemProps = TouchableOpacityProps & {
  value: number;
  active: boolean;
};

const DayItem: FC<DayItemProps> = ({
  value,
  active = false,
  disabled,
  ...props
}) => {
  const { color } = useColor();
  const { bg, content } = color[active && !disabled ? "primary" : "input"];
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: bg,
          opacity: disabled ? 0.3 : 1,
          width: "100%",
          aspectRatio: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "100%",
          padding: 10,
        },
      ]}
      disabled={disabled}
      {...props}
    >
      <Text variant="label" color={content}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

export default Calendar;
