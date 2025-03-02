import { useCreateCustomer } from "@/hooks/setting/useCustomer";
import { useColor } from "@/hooks/useColor";
import React, { FC, useState } from "react";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import IconButton from "../IconButton";
import Input from "../Input";
import Text from "../Text";
import Wrapper from "../Wrapper";

type CreatePelangganProps = {
  fab?: boolean;
};

const CreatePelanggan: FC<CreatePelangganProps> = ({ fab }) => {
  const { color } = useColor();
  const [show, setShow] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const { mutateAsync, isPending, error } = useCreateCustomer();
  return (
    <Wrapper pointerEvents="box-none">
      {fab ? (
        <IconButton
          icon="plus"
          style={{ position: "absolute", bottom: 20, right: 20 }}
          onPress={() => setShow(true)}
        />
      ) : (
        <Button
          label="Create Pelanggan"
          icon="plus"
          onPress={() => setShow(true)}
        />
      )}

      <BottomSheet
        visible={show}
        title="Create Pelanggan"
        onRequestClose={() => setShow(false)}
      >
        <Wrapper gap={10}>
          <Input
            label="Nama pelanggan"
            placeholder="Nama pelanggan"
            value={name}
            onChangeText={setName}
          />
          <Input
            label="Nomor telepon"
            placeholder="Nomor telepon"
            inputMode="tel"
            value={phone}
            onChangeText={setPhone}
          />
        </Wrapper>
        {error && (
          <Text variant="label" color={color.error.bg}>
            {error.message}
          </Text>
        )}
        <Button
          label="Simpan pelanggan"
          icon="check"
          onPress={() => {
            mutateAsync({ name, phone }).then(() => {
              setShow(false);
              setName("");
              setPhone("");
            });
          }}
          disabled={isPending}
        />
      </BottomSheet>
    </Wrapper>
  );
};

export default CreatePelanggan;
