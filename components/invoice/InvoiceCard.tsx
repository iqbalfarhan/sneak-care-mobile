import { useColor } from "@/hooks/useColor";
import { statusDescription } from "@/utils/helpers/text";
import { Order, OrderStatus } from "@/utils/types/order";
import React, { FC, useState } from "react";
import { TouchableOpacity } from "react-native";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import Select from "../Select";
import Text from "../Text";
import Wrapper from "../Wrapper";

type InvoiceCardProps = {
  invoice: Order;
  onChangeStatus: (status: OrderStatus) => void;
};

const InvoiceCard: FC<InvoiceCardProps> = ({ invoice, onChangeStatus }) => {
  const { color } = useColor();
  const { message, color: tema } = statusDescription(invoice.status);
  const { bg, content } = color[tema];

  const [show, setShow] = useState<boolean>(false);
  const [status, setStatus] = useState<OrderStatus>(invoice.status);

  return (
    <>
      <TouchableOpacity onLongPress={() => setShow(true)}>
        <Wrapper padding={20} backgroundColor={bg} borderRadius={10} gap={10}>
          <Text color={content} variant="subtitle">
            #{invoice.invoice_no}
          </Text>
          <Text color={content} variant="small">
            Hei, status order saat ini adalah {invoice.status}. {message} kamu
            bisa ubah status dengan long press
          </Text>
        </Wrapper>
      </TouchableOpacity>
      <BottomSheet
        title="Edit status order"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <Select
          withReset={false}
          options={["draft", "progress", "done", "complete", "cancelled"]}
          value={status}
          onChange={(status) => setStatus(status as OrderStatus)}
        />
        <Button
          label="Simpan perubahaan status"
          icon="check"
          onPress={() => {
            setShow(false);
            invoice.status = status;
            onChangeStatus(status);
          }}
        />
      </BottomSheet>
    </>
  );
};

export default InvoiceCard;
