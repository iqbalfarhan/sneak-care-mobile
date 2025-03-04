import { useColor } from "@/hooks/useColor";
import { Octicons } from "@expo/vector-icons";
import React from "react";
import SpinningView from "./SpinningView";
import Text from "./Text";
import Wrapper from "./Wrapper";

const Loading = () => {
  const { color } = useColor();
  return (
    <Wrapper justifyContent="center" alignItems="center" gap={10} flex={1}>
      <SpinningView>
        <Octicons name="sync" color={color.base.content} size={24} />
      </SpinningView>
      <Text>Loading...</Text>
    </Wrapper>
  );
};

export default Loading;
