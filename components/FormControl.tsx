import React, { FC, PropsWithChildren } from "react";
import Text from "./Text";
import Wrapper from "./Wrapper";

type FormControlProps = PropsWithChildren & {
  label: string;
};

const FormControl: FC<FormControlProps> = ({ children, label }) => {
  return (
    <Wrapper gap={5}>
      <Text variant="label">{label}</Text>
      {children}
    </Wrapper>
  );
};

export default FormControl;
