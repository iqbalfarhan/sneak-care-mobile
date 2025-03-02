import { ThemeColors, useColor } from "@/hooks/useColor";
import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text from "./Text";

type ButtonProps = TouchableOpacityProps & {
  color?: keyof ThemeColors;
  value: string | number;
  size?: "default" | "small";
};

const SquareButton: FC<ButtonProps> = ({
  color = "primary",
  style,
  disabled,
  size = "default",
  value,
  ...props
}) => {
  const { color: theme } = useColor();
  const { bg, content } = theme[color];

  const buttonSize = {
    default: 48,
    small: 38,
  };
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: bg,
          height: buttonSize[size],
          width: buttonSize[size],
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          borderRadius: 10,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      {...props}
    >
      <Text color={content}>{value}</Text>
    </TouchableOpacity>
  );
};

export default SquareButton;
