import { ThemeColors, useColor } from "@/hooks/useColor";
import React, { FC } from "react";
import { ViewStyle } from "react-native";
import Wrapper from "./Wrapper";

type DividerProps = {
  height?: ViewStyle["height"];
  color?: keyof ThemeColors;
};

const Divider: FC<DividerProps> = ({ height = 1, color = "input" }) => {
  const { color: theme } = useColor();
  const { bg } = theme[color];
  return <Wrapper height={height} marginVertical={7} backgroundColor={bg} />;
};

export default Divider;
