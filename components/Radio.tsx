import { ThemeColors, useColor } from "@/hooks/useColor";
import { Octicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import Text from "./Text";
import Wrapper from "./Wrapper";

type RadioProps = {
  options: string[];
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  color?: keyof ThemeColors;
  activeColor?: keyof ThemeColors;
};

const Radio: FC<RadioProps> = ({
  options = [],
  value,
  onChange,
  label,
  color = "card",
  activeColor = "primary",
}) => {
  const { color: theme } = useColor();
  const { bg, content } = theme[color];
  const active = theme[activeColor];
  return (
    <Wrapper gap={5}>
      {label && <Text variant="label">{label}</Text>}
      <Wrapper
        backgroundColor={bg}
        borderRadius={10}
        paddingHorizontal={20}
        paddingVertical={10}
      >
        {options.map((option) => {
          const selected = option === value;
          const activeContent = selected ? active.bg : content;
          return (
            <TouchableOpacity key={option} onPress={() => onChange?.(option)}>
              <Wrapper
                flexDirection="row"
                gap={10}
                alignItems="center"
                paddingVertical={7}
              >
                <Octicons
                  name={selected ? "check-circle-fill" : "circle"}
                  color={activeContent}
                  size={18}
                />
                <Text color={activeContent}>{option}</Text>
              </Wrapper>
            </TouchableOpacity>
          );
        })}
      </Wrapper>
    </Wrapper>
  );
};

export default Radio;
