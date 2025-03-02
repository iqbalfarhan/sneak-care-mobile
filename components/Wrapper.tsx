import React, { FC, PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";

type WrapperProps = PropsWithChildren & ViewStyle;

const Wrapper: FC<WrapperProps> = ({ children, ...props }) => {
  return <View style={[props]}>{children}</View>;
};

export default Wrapper;
