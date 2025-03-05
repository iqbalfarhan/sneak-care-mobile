import { generateWhatsappMessage } from "@/utils/helpers/text";
import { Order } from "@/utils/types/order";
import * as Linking from "expo-linking";
import React, { FC } from "react";
import Button from "../Button";

type SendInvoiceProps = {
  invoice: Order;
};

const SendInvoice: FC<SendInvoiceProps> = ({ invoice }) => {
  const url = generateWhatsappMessage(invoice);

  return (
    <Button
      label="Kirim invoice ke pelanggan"
      icon="comment"
      color="card"
      align="flex-start"
      onPress={() => {
        Linking.openURL(url).catch(() => {
          alert("Gagal membuka WhatsApp. Pastikan sudah terinstall!");
        });
      }}
    />
  );
};

export default SendInvoice;
