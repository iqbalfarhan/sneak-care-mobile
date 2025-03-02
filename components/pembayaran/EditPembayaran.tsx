import { useEditPayment, useGetBank } from "@/hooks/setting/usePayment";
import { Pembayaran } from "@/utils/types/pembayaran";
import React, { FC, useState } from "react";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import IconButton from "../IconButton";
import Input from "../Input";
import Select from "../Select";
import Wrapper from "../Wrapper";

type EditPembayaranProps = {
  pembayaran: Pembayaran;
};

const EditPembayaran: FC<EditPembayaranProps> = ({ pembayaran }) => {
  const [show, setShow] = useState<boolean>(false);
  const { data: banks } = useGetBank();

  const [name, setName] = useState<string>(pembayaran.name);
  const [bank, setBank] = useState<string>(
    banks?.find((bank) => bank.id === pembayaran.bank_id)?.name ?? "",
  );
  const [accountNumber, setAccountNumber] = useState<string>(
    pembayaran.account_number,
  );

  const { mutateAsync, isPending, error } = useEditPayment();

  return (
    <>
      <IconButton
        size="small"
        icon="pencil"
        color="card"
        onPress={() => setShow(true)}
      />

      <BottomSheet
        title="Tambah metode bayar"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <Wrapper gap={15}>
          <Input
            label="Nama metode bayar"
            placeholder="Nama metode bayar"
            value={name}
            onChangeText={setName}
          />
          <Select
            label="Pilih bank atau e-wallet"
            placeholder="Pilih bank atau e-wallet"
            options={banks?.flatMap((bank) => bank.name) ?? []}
            value={bank}
            onChange={setBank}
          />
          <Input
            inputMode="numeric"
            label="No rekening atau nomor telepon"
            placeholder="Nomor rekening atau nomor telepon"
            value={accountNumber}
            onChangeText={setAccountNumber}
          />
        </Wrapper>
        {error && <ErrorMessage message={error.message} />}
        <Button
          label="Simpan"
          icon="check"
          disabled={isPending}
          onPress={() => {
            const payload = {
              id: pembayaran.id,
              bank_id:
                banks?.find((bankItem) => bankItem.name === bank)?.id ?? 0,
              name,
              account_number: accountNumber,
            };
            mutateAsync(payload).then(() => {
              setShow(false);
              setName("");
              setBank("");
              setAccountNumber("");
            });
          }}
        />
      </BottomSheet>
    </>
  );
};

export default EditPembayaran;
