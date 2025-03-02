import { useColor } from "@/hooks/useColor";
import { statusDescription } from "@/utils/helpers/text";
import { Order } from "@/utils/types/order";
import React, { FC } from "react";
import Text from "../Text";
import Wrapper from "../Wrapper";

type InvoiceCardProps = {
  invoice: Order;
};

const InvoiceCard: FC<InvoiceCardProps> = ({ invoice }) => {
  const { color } = useColor();
  const { message, color: tema } = statusDescription(invoice.status);
  const { bg, content } = color[tema];

  return (
    <Wrapper padding={20} backgroundColor={bg} borderRadius={10} gap={10}>
      <Text color={content} variant="subtitle">
        #{invoice.invoice_no}
      </Text>
      <Text color={content} variant="small">
        Hei, status order saat ini adalah {invoice.status}. {message}
      </Text>
    </Wrapper>
  );
};

export default InvoiceCard;
