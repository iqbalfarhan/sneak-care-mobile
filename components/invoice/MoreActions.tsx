import { Order } from "@/utils/types/order";
import React, { FC, useState } from "react";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import Divider from "../Divider";
import IconButton from "../IconButton";
import Wrapper from "../Wrapper";
import DeleteInvoice from "./DeleteInvoice";

type MoreActionsProps = {
  invoice: Order;
};

const MoreActions: FC<MoreActionsProps> = ({ invoice }) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState<string>(invoice.status);
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
          <Divider />
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

          <Button
            label="Kirim invoice digital ke pelanggan"
            icon="comment"
            color="card"
            align="flex-start"
          />
        </Wrapper>
      </BottomSheet>
    </>
  );
};

export default MoreActions;
