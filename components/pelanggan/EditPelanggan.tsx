import { useEditCustomer } from "@/hooks/setting/useCustomer";
import { useColor } from "@/hooks/useColor";
import { Pelanggan } from "@/utils/types/pelanggan";
import React, { FC, useState } from "react";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import FormGroup from "../FormGroup";
import IconButton from "../IconButton";
import Input from "../Input";
import Text from "../Text";

type EditPelangganProps = {
  pelanggan: Pelanggan;
};

const EditPelanggan: FC<EditPelangganProps> = ({ pelanggan }) => {
  const { color } = useColor();
  const [show, setShow] = useState(false);
  const [name, setName] = useState<string>(pelanggan.name);
  const [phone, setPhone] = useState<string>(pelanggan.phone);

  const { mutateAsync, isPending, error } = useEditCustomer();

  return (
    <>
      <IconButton
        color="base"
        size="small"
        icon="pencil"
        onPress={() => setShow(true)}
      />

      <BottomSheet
        title="Edit Pelanggan"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <FormGroup>
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
        </FormGroup>
        {error && (
          <Text variant="label" color={color.error.bg}>
            {error.message}
          </Text>
        )}
        <Button
          label="Simpan perubahan"
          icon="check"
          onPress={() => {
            mutateAsync({ id: pelanggan.id, name, phone }).then(() => {
              setShow(false);
            });
          }}
          loading={isPending}
        />
      </BottomSheet>
    </>
  );
};

export default EditPelanggan;
