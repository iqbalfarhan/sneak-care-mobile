import { ThemeColors, useColor } from "@/hooks/useColor";
import { formatRupiah } from "@/utils/helpers/currency";
import React, { FC } from "react";
import { ColorValue, TouchableOpacity, ViewStyle } from "react-native";
import Text from "./Text";
import Wrapper from "./Wrapper";

export type BarItem = {
  label: string;
  value: number;
  color?: ColorValue;
  onPress?: () => void;
};

type BarChartProps = {
  height?: number;
  data?: BarItem[];
  wrapperStyle?: ViewStyle;
  color?: keyof ThemeColors;
  valueType?: "currency" | "number";
};

const BarChart: FC<BarChartProps> = ({
  height = 200,
  wrapperStyle,
  data = [],
  color = "primary",
  valueType = "number",
}) => {
  const { color: theme } = useColor();
  const values = data.map((item) => item.value);
  const maxValue = values.length > 0 ? Math.max(...values) : 1;

  const { bg, content } = theme[color];

  return (
    <Wrapper
      height={height}
      flexDirection="row"
      gap={10}
      alignItems="flex-end"
      justifyContent="center"
      {...wrapperStyle}
    >
      {data.map((item, index) => (
        <Wrapper
          key={index}
          flex={1}
          maxWidth={40}
          borderRadius={5}
          backgroundColor={item.color ?? bg}
          height={`${(item.value / maxValue) * 100}%`}
          padding={5}
        >
          <TouchableOpacity onPress={item.onPress} style={{ flex: 1 }} />
          <Text
            variant="small"
            color={content}
            align="center"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {valueType == "number" ? item.value : formatRupiah(item.value)}
          </Text>
          <Text
            variant="small"
            color={content}
            align="center"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.label}
          </Text>
        </Wrapper>
      ))}
    </Wrapper>
  );
};

export default BarChart;
