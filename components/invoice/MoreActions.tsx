import React, { useState } from "react";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import IconButton from "../IconButton";
import Wrapper from "../Wrapper";

const MoreActions = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState<string>();
  return (
    <>
      <IconButton
        icon="kebab-horizontal"
        color="input"
        onPress={() => setShow(true)}
      />
      <BottomSheet
        visible={show}
        title="Action lainnya"
        onRequestClose={() => setShow(false)}
      >
        <Wrapper>
          <Button label="Edit status order" color="card" align="flex-start" />
          <Button label="Kirim WA pelanggan" color="card" align="flex-start" />
        </Wrapper>
      </BottomSheet>
    </>
  );
};

export default MoreActions;
