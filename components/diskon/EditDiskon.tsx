import { useEditDiscount } from "@/hooks/setting/useDiskon";
import { Diskon } from "@/utils/types/diskon";
import React, { FC, useState } from "react";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import FormGroup from "../FormGroup";
import IconButton from "../IconButton";
import Input from "../Input";
import Select from "../Select";

type EditDiskonProps = {
  diskon: Diskon;
};

const EditDiskon: FC<EditDiskonProps> = ({ diskon }) => {
  const [name, setName] = useState<string>(diskon.name);
  const [description, setDescription] = useState<string>(diskon.description);
  const [jenis, setJenis] = useState<string>(() => {
    if (diskon.type === "percent") return "Potongan persen";
    return "Potongan nominal";
  });
  const [value, setValue] = useState<number>(diskon.value);

  const [show, setShow] = useState<boolean>(false);

  const { mutateAsync, isPending, error } = useEditDiscount();

  return (
    <>
      <IconButton
        size="small"
        icon="pencil"
        color="card"
        onPress={() => setShow(true)}
      />

      <BottomSheet
        title="Edit Diskon"
        visible={show}
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
            label="Keterangan diskon"
            placeholder="Deskripsi diskon"
            value={description}
            multiline
            onChangeText={setDescription}
          />
          <Select
            label="Jenis diskon"
            withReset={false}
            value={jenis}
            onChange={setJenis}
            placeholder="Jenis diskon"
            options={["Potongan persen", "Potongan nominal"]}
          />
          <Input
            label="Nilai diskon"
            placeholder="Nominal"
            inputMode="numeric"
            value={value.toString()}
            onChangeText={(text) => setValue(Number(text))}
          />
        </FormGroup>

        {error && <ErrorMessage message={error.message} />}

        <Button
          label="Simpan perubahan"
          icon="check"
          loading={isPending}
          onPress={() => {
            mutateAsync({
              id: diskon.id,
              name,
              description,
              type: jenis === "Potongan persen" ? "percent" : "amount",
              value,
            }).then(() => setShow(false));
          }}
        />
      </BottomSheet>
    </>
  );
};

export default EditDiskon;
