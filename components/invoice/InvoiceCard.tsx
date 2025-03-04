import { useEditOrder } from "@/hooks/invoice/useOrder";
import { useColor } from "@/hooks/useColor";
import { statusDescription } from "@/utils/helpers/text";
import { Order, OrderStatus } from "@/utils/types/order";
import { Octicons } from "@expo/vector-icons";
import React, { FC, useState } from "react";
import { TouchableOpacity } from "react-native";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import FormGroup from "../FormGroup";
import Radio from "../Radio";
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
  const [paid, setPaid] = useState<boolean>(invoice.paid);

  const { mutateAsync, isPending, error } = useEditOrder();

  const paidColor = invoice.paid ? content : color.error.bg;
  const paidIcon: keyof typeof Octicons.glyphMap = invoice.paid
    ? "check-circle-fill"
    : "x-circle-fill";

  return (
    <>
      <TouchableOpacity onPress={() => setShow(true)}>
        <Wrapper padding={20} backgroundColor={bg} borderRadius={10} gap={10}>
          <Wrapper flexDirection="row" justifyContent="space-between">
            <Text color={content} variant="subtitle">
              #{invoice.invoice_no}
            </Text>
            <Wrapper flexDirection="row" gap={3} alignItems="center">
              <Text color={paidColor} variant="label">
                {invoice.paid ? "Paid" : "Unpaid"}
              </Text>
              <Octicons name={paidIcon} size={12} color={paidColor} />
            </Wrapper>
          </Wrapper>
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
        <FormGroup>
          <Radio
            label="Ganti status order"
            options={["draft", "progress", "done", "complete", "cancelled"]}
            value={status}
            onChange={(status) => setStatus(status as OrderStatus)}
          />
          <Radio
            label="Ganti status order"
            options={["Sudah dibayar", "Belum dibayar"]}
            value={paid ? "Sudah dibayar" : "Belum dibayar"}
            onChange={(value) =>
              setPaid(value == "Sudah dibayar" ? true : false)
            }
          />
        </FormGroup>
        {error && <ErrorMessage message={error.message} />}
        <Button
          loading={isPending}
          label="Simpan perubahaan status"
          icon="check"
          onPress={() => {
            mutateAsync({
              id: invoice.id,
              status,
              paid,
            }).then(() => {
              setShow(false);
              invoice.status = status;
              onChangeStatus(status);
            });
          }}
        />
      </BottomSheet>
    </>
  );
};

export default InvoiceCard;
