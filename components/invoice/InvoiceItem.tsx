import { ThemeColors, useColor } from "@/hooks/useColor";
import { formatRupiah } from "@/utils/helpers/currency";
import { generateAvatarLink, statusDescription } from "@/utils/helpers/text";
import { Order } from "@/utils/types/order";
import { Octicons } from "@expo/vector-icons";
import React, { FC } from "react";
import Avatar from "../Avatar";
import Card from "../Card";
import Text from "../Text";
import Wrapper from "../Wrapper";

type InvoiceItemProps = {
  invoice: Order;
  color?: keyof ThemeColors;
};

const InvoiceItem: FC<InvoiceItemProps> = ({ invoice, color = "card" }) => {
  const pelanggan = invoice.pelanggan;
  const barang = invoice.barang;
  const { color: theme } = useColor();

  const { color: statusColor, message } = statusDescription(invoice.status);
  const { bg } = theme[statusColor];
  return (
    <Card
      color={color}
      header={
        <Wrapper
          flexDirection="row"
          alignItems="center"
          gap={5}
          justifyContent="space-between"
        >
          <Wrapper flexDirection="row" alignItems="center" gap={5}>
            <Text style={{ fontFamily: "Bold" }}>{invoice.invoice_no}</Text>
            {invoice.paid ? (
              <Octicons
                name="check-circle-fill"
                color={theme.accent.bg}
                size={12}
              />
            ) : null}
          </Wrapper>
          <Text
            variant="label"
            color={bg}
            style={{ textTransform: "capitalize" }}
          >
            {invoice.status}
          </Text>
        </Wrapper>
      }
      footer={
        <Wrapper
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Wrapper flexDirection="row" alignItems="center" gap={5}>
            <Avatar
              fallback={pelanggan?.name ?? "D"}
              size={16}
              src={{ uri: generateAvatarLink(pelanggan.name ?? "null") }}
            />
            <Text variant="label">{pelanggan?.name ?? "Belum dipickup"}</Text>
          </Wrapper>
          <Text variant="label">
            {formatRupiah(
              barang
                .flatMap((item) => item.layanan.price)
                .reduce((a, b) => Number(a) + Number(b), 0),
            )}
          </Text>
        </Wrapper>
      }
    >
      <Text variant="label">
        Status order saat ini {invoice.status}, {message}
      </Text>
    </Card>
  );
};

export default InvoiceItem;
