import { useEditService } from "@/hooks/setting/useService";
import { useColor } from "@/hooks/useColor";
import { Layanan } from "@/utils/types/layanan";
import React, { FC, useState } from "react";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import FormGroup from "../FormGroup";
import IconButton from "../IconButton";
import Input from "../Input";
import Text from "../Text";

type EditLayananProps = {
  layanan: Layanan;
};

const EditLayanan: FC<EditLayananProps> = ({ layanan }) => {
  const { color } = useColor();
  const [show, setShow] = useState<boolean>(false);

  const [name, setName] = useState<string>(layanan.name);
  const [description, setDescription] = useState<string>(layanan.description);
  const [price, setPrice] = useState<string>(layanan.price.toString());

  const { mutateAsync, isPending, error } = useEditService();
  return (
    <>
      <IconButton
        size="small"
        color="base"
        icon="pencil"
        onPress={() => setShow(true)}
      />

      <BottomSheet
        title="Edit service"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <FormGroup>
          <Input
            label="Nama layanan"
            placeholder="Nama layanan"
            value={name}
            onChangeText={setName}
          />
          <Input
            label="Keterangan"
            placeholder="Deskripsi"
            value={description}
            multiline
            onChangeText={setDescription}
          />
          <Input
            label="Harga layanan"
            placeholder="Harga layanan"
            inputMode="numeric"
            value={price}
            onChangeText={setPrice}
          />
        </FormGroup>
        {error && (
          <Text color={color.error.bg} variant="label">
            {error.message}
          </Text>
        )}
        <Button
          label="Simpan"
          icon="check"
          loading={isPending}
          onPress={() => {
            mutateAsync({
              id: layanan.id,
              name,
              description,
              price: Number(price),
            }).then(() => setShow(false));
          }}
        />
      </BottomSheet>
    </>
  );
};

export default EditLayanan;
