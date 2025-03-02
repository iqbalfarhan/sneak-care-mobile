import { useColor } from "@/hooks/useColor";
import { Octicons } from "@expo/vector-icons";
import React, { FC, useState } from "react";
import { ScrollView, TouchableOpacity, ViewStyle } from "react-native";
import BottomSheet from "./BottomSheet";
import Input from "./Input";
import Text from "./Text";
import Wrapper from "./Wrapper";

type SelectProps = {
  placeholder?: string;
  withReset?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  options: string[];
  style?: ViewStyle;
  label?: string;
};

const Select: FC<SelectProps> = ({
  label,
  placeholder = "Pilih",
  withReset = true,
  value,
  onChange,
  options,
  style,
}) => {
  const { color } = useColor();
  const [show, setShow] = useState<boolean>(false);
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
          name="chevron-down"
          size={20}
          color={color.base.content}
          style={{ position: "absolute", right: 16, bottom: 15 }}
        />
      </TouchableOpacity>

      <BottomSheet
        title={placeholder}
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <ScrollView
          style={{ maxHeight: 500 }}
          showsVerticalScrollIndicator={false}
        >
          <Wrapper>
            {options.map((opt, index) => (
              <TouchableOpacity
                style={{
                  paddingHorizontal: 20,
                  borderRadius: 10,
                  backgroundColor:
                    opt === value ? color.card.bg : "transparent",
                  height: 48,
                  justifyContent: "center",
                }}
                key={index}
                onPress={() => {
                  onChange?.(opt);
                  setShow(false);
                }}
              >
                <Wrapper flexDirection="row" gap={10}>
                  {opt === value && (
                    <Octicons name="check" size={16} color={color.success.bg} />
                  )}
                  <Text>{opt}</Text>
                </Wrapper>
              </TouchableOpacity>
            ))}
            {withReset && (
              <TouchableOpacity
                style={{
                  paddingHorizontal: 20,
                  borderRadius: 10,
                  height: 48,
                  justifyContent: "center",
                }}
                onPress={() => {
                  onChange?.("");
                  setShow(false);
                }}
              >
                <Text>Reset pilihan</Text>
              </TouchableOpacity>
            )}
          </Wrapper>
        </ScrollView>
      </BottomSheet>
    </>
  );
};

export default Select;
