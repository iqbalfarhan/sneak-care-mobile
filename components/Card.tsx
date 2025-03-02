import { ThemeColors, useColor } from "@/hooks/useColor";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import { ViewStyle } from "react-native";
import Wrapper from "./Wrapper";

type CardProps = PropsWithChildren & {
  header?: ReactNode;
  footer?: ReactNode;
  color?: keyof ThemeColors;
  wrapperStyle?: ViewStyle;
};

const Card: FC<CardProps> = ({
  header,
  children,
  footer,
  color = "card",
  wrapperStyle,
}) => {
  const { color: theme } = useColor();
  const { bg } = theme[color];
  return (
    <Wrapper
      backgroundColor={bg}
      padding={20}
      borderRadius={10}
      gap={15}
      {...wrapperStyle}
    >
      {header && <Wrapper>{header}</Wrapper>}
      <Wrapper gap={15}>{children}</Wrapper>
      {footer && <Wrapper>{footer}</Wrapper>}
    </Wrapper>
  );
};

export default Card;
