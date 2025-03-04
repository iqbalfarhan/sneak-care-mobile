import { useEditKaryawan } from "@/hooks/setting/useKaryawan";
import { User, UserRole } from "@/utils/types/user";
import React, { FC, useState } from "react";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import FormGroup from "../FormGroup";
import IconButton from "../IconButton";
import Input from "../Input";
import Select from "../Select";

type EditKaryawanProps = {
  karyawan: User;
};

const EditKaryawan: FC<EditKaryawanProps> = ({ karyawan }) => {
  const [values, setValues] = useState<User>(karyawan);
  const [show, setShow] = useState<boolean>(false);

  const { mutateAsync, isPending, error } = useEditKaryawan();
  return (
    <>
      <IconButton
        color="base"
        size="small"
        icon="pencil"
        onPress={() => setShow(true)}
      />
      <BottomSheet
        title="Edit Karyawan"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <FormGroup>
          <Input
            label="Nama karyawan"
            value={values?.name}
            onChangeText={(text) => setValues({ ...values, name: text })}
          />
          <Input
            inputMode="email"
            label="Alamat email"
            value={values?.email}
            onChangeText={(text) => setValues({ ...values, email: text })}
          />
          <Select
            withReset={false}
            options={["teknisi", "kasir"] as UserRole[]}
            label="Hak akses karyawan"
            value={values?.role}
            onChange={(value) => {
              setValues({ ...values, role: value as UserRole });
            }}
          />
        </FormGroup>
        {error && <ErrorMessage message={error.message} />}
        <Button
          label="Simpan perubahan"
          icon="check"
          disabled={isPending}
          onPress={() => {
            mutateAsync(values).then(() => setShow(false));
          }}
        />
      </BottomSheet>
    </>
  );
};

export default EditKaryawan;
