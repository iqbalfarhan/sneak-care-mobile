import { ThemeColors, useColor } from "@/hooks/useColor";
import { Octicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import IconButton from "./IconButton";
import Text from "./Text";
import Wrapper from "./Wrapper";

type MenuItemProps = {
  title: string;
  subtitle: string;
  icon: keyof typeof Octicons.glyphMap;
  onPress?: () => void;
  color?: keyof ThemeColors;
  disabled?: boolean;
};

const MenuItem: FC<MenuItemProps> = ({
  title,
  subtitle,
  icon,
  color = "primary",
  disabled = false,
  onPress,
}) => {
  const { color: theme } = useColor();
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Wrapper
        opacity={disabled ? 0.7 : 1}
        flexDirection="row"
        padding={20}
        paddingVertical={13}
        gap={15}
        backgroundColor={theme.card.bg}
        borderRadius={20}
        alignItems="center"
      >
        <IconButton icon={icon} color={color} onPress={onPress} />
        <Wrapper>
          <Text variant="menutitle">{title}</Text>
          <Text variant="label">{subtitle}</Text>
        </Wrapper>
      </Wrapper>
    </TouchableOpacity>
  );
};

export default MenuItem;
