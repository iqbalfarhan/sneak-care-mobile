import { useColor } from "@/hooks/useColor";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Wrapper from "./Wrapper";

type SwipeActionProps = PropsWithChildren & {
  actions?: ReactNode;
};

const SwipeAction: FC<SwipeActionProps> = ({ children, actions }) => {
  const { color } = useColor();

  return (
    <Swipeable
      containerStyle={{
        borderRadius: 10,
        backgroundColor: color.input.bg,
        gap: 10,
        overflow: "hidden",
      }}
      renderRightActions={() => (
        <Wrapper
          paddingHorizontal={10}
          gap={5}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          {actions}
        </Wrapper>
      )}
    >
      {children}
    </Swipeable>
  );
};

export default SwipeAction;
