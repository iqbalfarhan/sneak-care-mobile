import { Order } from "@/utils/types/order";
import React, { FC, useState } from "react";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import IconButton from "../IconButton";
import Wrapper from "../Wrapper";
import DeleteInvoice from "./DeleteInvoice";
import SendInvoice from "./SendInvoice";
import ViewRawData from "./ViewRawData";

type MoreActionsProps = {
  invoice: Order;
};

const MoreActions: FC<MoreActionsProps> = ({ invoice }) => {
  const [show, setShow] = useState(false);
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
        <Wrapper gap={5}>
          <DeleteInvoice invoice={invoice} />
        </Wrapper>
        <Wrapper gap={5}>
          {invoice.paid ? (
            <Button
              label="Tandai belum dibayar"
              color="card"
              icon="x"
              align="flex-start"
            />
          ) : (
            <Button
              label="Tandai sudah dibayar"
              color="card"
              icon="check"
              align="flex-start"
            />
          )}

          <ViewRawData invoice={invoice} />
          <SendInvoice invoice={invoice} />
        </Wrapper>
      </BottomSheet>
    </>
  );
};

export default MoreActions;
