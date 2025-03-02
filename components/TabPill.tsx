import React, { FC } from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import Badge from "./Badge";
import Wrapper from "./Wrapper";

type TabsProps = {
  options: string[];
  active?: string;
  setActive?: (value: string) => void;
  wrapperStyle?: ViewStyle;
};

const TabPill: FC<TabsProps> = ({
  options,
  active,
  setActive,
  wrapperStyle,
}) => {
  return (
    <Wrapper flexDirection="row" gap={5} {...wrapperStyle}>
      {options.map((item) => (
        <TouchableOpacity onPress={() => setActive?.(item)} key={item}>
          <Badge
            color={item === active ? "primary" : "input"}
            label={item == "" ? "All" : item}
          />
        </TouchableOpacity>
      ))}
    </Wrapper>
  );
};

export default TabPill;
