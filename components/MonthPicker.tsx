import { useColor } from "@/hooks/useColor";
import { Bulan } from "@/utils/types/tanggal";
import { Octicons } from "@expo/vector-icons";
import React, { FC, useState } from "react";
import { Modal, TouchableOpacity, ViewStyle } from "react-native";
import Input from "./Input";
import MonthCalendar from "./MonthCalendar";
import Wrapper from "./Wrapper";

type MonthPickerProps = {
  label?: string;
  placeholder?: string;
  style?: ViewStyle;
  value: `${Bulan} ${number}`;
  onChange: (value: `${Bulan} ${number}`) => void;
};

const MonthPicker: FC<MonthPickerProps> = ({
  label,
  placeholder,
  value,
  style,
  onChange,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const { color } = useColor();
  return (
    <>
      <TouchableOpacity onPress={() => setShow(true)} style={[{}, style]}>
        <Input
          label={label}
          editable={false}
          placeholder={placeholder}
          value={value}
        />
        <Octicons
          name="calendar"
          size={18}
          color={color.base.content}
          style={{ position: "absolute", right: 16, bottom: 15 }}
        />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        visible={show}
        onRequestClose={() => setShow(false)}
        transparent
        statusBarTranslucent
      >
        <Wrapper
          alignItems="center"
          justifyContent="center"
          padding={20}
          flex={1}
          backgroundColor={"rgba(0,0,0,0.7)"}
        >
          <MonthCalendar
            value={value}
            onChange={(bulantahun) => {
              onChange(bulantahun);
              setShow(false);
            }}
          />
        </Wrapper>
      </Modal>
    </>
  );
};

export default MonthPicker;
