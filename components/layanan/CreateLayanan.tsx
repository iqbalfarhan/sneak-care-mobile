import { useCreateService } from "@/hooks/setting/useService";
import { useColor } from "@/hooks/useColor";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import Input from "../Input";
import Text from "../Text";
import Wrapper from "../Wrapper";

const CreateLayanan = () => {
  const { color } = useColor();
  const [show, setShow] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const { mutateAsync, isPending, error } = useCreateService();
  return (
    <GestureHandlerRootView>
      <Button
        label="Tambah layanan"
        icon="plus"
        onPress={() => setShow(true)}
      />

      <BottomSheet
        title="Create service"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <Wrapper gap={10}>
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
            onChangeText={setDescription}
          />
          <Input
            label="Harga layanan"
            placeholder="Harga layanan"
            inputMode="numeric"
            value={price}
            onChangeText={setPrice}
          />
        </Wrapper>
        {error && (
          <Text color={color.error.bg} variant="label">
            {error.message}
          </Text>
        )}
        <Button
          label="Simpan"
          icon="check"
          disabled={isPending}
          onPress={() => {
            mutateAsync({
              name,
              description,
              price: Number(price),
            }).then(() => setShow(false));
          }}
        />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default CreateLayanan;
