import { useDeleteOrder } from "@/hooks/invoice/useOrder";
import { Order } from "@/utils/types/order";
import { router } from "expo-router";
import React, { FC, useState } from "react";
import Button from "../Button";
import Popup from "../Popup";

type DeleteInvoiceProps = {
  invoice: Order;
};

const DeleteInvoice: FC<DeleteInvoiceProps> = ({ invoice }) => {
  const [show, setShow] = useState<boolean>(false);
  const { mutateAsync, isPending, error } = useDeleteOrder();
  return (
    <>
      <Button
        label="Hapus invoice ini"
        icon="trash"
        color="card"
        align="flex-start"
        onPress={() => setShow(true)}
      />

      <Popup
        title="Hapus invoice"
        message="Yakin nih mau ngehapus order ini? ngehapus order bakal ngaruh ke laporan laporan loh.. yakin?"
        visible={show}
        onRequestClose={() => setShow(false)}
        loading={isPending}
        error={error?.message}
        onConfirm={() => {
          mutateAsync(invoice.id)
            .then(() => setShow(false))
            .then(() => router.push("/invoice"));
        }}
      />
    </>
  );
};

export default DeleteInvoice;
