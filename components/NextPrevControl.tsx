import React, { FC } from "react";
import IconButton from "./IconButton";
import Wrapper from "./Wrapper";

type NextPrevControlProps = {
  hanleNext: () => void;
  handlePrev: () => void;
};

const NextPrevControl: FC<NextPrevControlProps> = ({
  handlePrev,
  hanleNext,
}) => {
  return (
    <Wrapper flexDirection="row" gap={2}>
      <IconButton
        size="small"
        icon="chevron-left"
        onPress={hanleNext}
        color="input"
      />
      <IconButton
        size="small"
        icon="chevron-right"
        onPress={handlePrev}
        color="input"
      />
    </Wrapper>
  );
};

export default NextPrevControl;
