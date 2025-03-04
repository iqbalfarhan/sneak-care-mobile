import { usePostDiscount } from "@/hooks/setting/useDiskon";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";

const CreateDiskon = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [jenis, setJenis] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const [show, setShow] = useState<boolean>(false);

  const { mutate, isPending } = usePostDiscount();
  return (
    <GestureHandlerRootView>
      <Button label="Tambah Diskon" icon="plus" onPress={() => setShow(true)} />
      <BottomSheet
        title="Tambah diskon"
        visible={show}
        onMagicTap={() => setShow(false)}
        onRequestClose={() => setShow(false)}
      >
        <FormGroup>
          <Input
            label="Nama diskon"
            placeholder="Nama diskon"
            value={name}
            onChangeText={setName}
          />
          <Input
            label="Deskripsi diskon"
            placeholder="Deskripsi diskon"
            value={description}
            onChangeText={setDescription}
          />
          <Select
            withReset={false}
            value={jenis}
            onChange={setJenis}
            label="Jenis diskon"
            placeholder="Jenis diskon"
            options={["Potongan persen", "Potongan nominal"]}
          />
          <Input
            label="Nominal"
            placeholder="Nominal"
            inputMode="numeric"
            value={value}
            onChangeText={setValue}
          />
        </FormGroup>
        <Button
          label="Simpan diskon baru"
          icon="check"
          onPress={() => {
            mutate({
              name,
              description,
              type: jenis === "Potongan persen" ? "percent" : "amount",
              value: parseInt(value),
            });
            setShow(false);
          }}
        />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default CreateDiskon;
