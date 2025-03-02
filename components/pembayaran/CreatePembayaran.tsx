import { useCreatePayment, useGetBank } from "@/hooks/setting/usePayment";
import React, { FC, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import Input from "../Input";
import Select from "../Select";
import Wrapper from "../Wrapper";

type CreatePembayaranProps = {};

const CreatePembayaran: FC<CreatePembayaranProps> = () => {
  const [show, setShow] = useState<boolean>(false);
  const { data: banks } = useGetBank();

  const [name, setName] = useState<string>("");
  const [bank, setBank] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");

  const { mutateAsync, isPending, error } = useCreatePayment();

  return (
    <GestureHandlerRootView>
      <Button
        label="Tambah metode bayar"
        icon="plus"
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
    </GestureHandlerRootView>
  );
};

export default CreatePembayaran;
