import { useColor } from "@/hooks/useColor";
import { formatDate } from "@/utils/helpers/text";
import { Octicons } from "@expo/vector-icons";
import React, { FC, useState } from "react";
import { Modal, TouchableOpacity, ViewStyle } from "react-native";
import Calendar from "./Calendar";
import Input from "./Input";
import Wrapper from "./Wrapper";

type DatePickerProps = {
  label?: string;
  placeholder?: string;
  value: Date;
  onChange: (date: Date) => void;
  style?: ViewStyle;
};

const DatePicker: FC<DatePickerProps> = ({
  label,
  placeholder,
  style,
  value,
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
          value={formatDate(value)}
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
          <Calendar
            value={value}
            onChange={(date) => {
              onChange(date);
              setShow(false);
            }}
          />
        </Wrapper>
      </Modal>
    </>
  );
};

export default DatePicker;
