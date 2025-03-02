import { ThemeColors, useColor } from "@/hooks/useColor";
import { Octicons } from "@expo/vector-icons";
import React, { FC } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import Text from "./Text";

type ButtonProps = TouchableOpacityProps & {
  label: string;
  loading?: boolean;
  icon?: keyof typeof Octicons.glyphMap;
  color?: keyof ThemeColors;
  align?: ViewStyle["justifyContent"];
};

const Button: FC<ButtonProps> = ({
  label,
  icon,
  color = "primary",
  loading = false,
  style,
  disabled,
  align = "center",
  ...props
}) => {
  const { color: theme } = useColor();
  const { bg, content } = theme[color];
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: bg,
          height: 48,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: align,
          paddingHorizontal: 20,
          gap: 10,
          borderRadius: 10,
          width: "100%",
          opacity: disabled || loading ? 0.5 : 1,
        },
        style,
      ]}
      disabled={disabled || loading}
      {...props}
    >
      {icon && <Octicons name={icon} size={20} color={content} />}
      <Text color={content} variant="button">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
