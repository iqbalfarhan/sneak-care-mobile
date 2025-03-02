import { User, UserRole } from "@/utils/types/user";
import React, { FC, useState } from "react";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import IconButton from "../IconButton";
import Input from "../Input";
import Select from "../Select";
import Wrapper from "../Wrapper";

type EditKaryawanProps = {
  karyawan?: User;
};

const EditKaryawan: FC<EditKaryawanProps> = ({ karyawan }) => {
  const [values, setValues] = useState<User | undefined>(karyawan);
  const [show, setShow] = useState<boolean>(false);
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
        <Wrapper gap={15}>
          <Input
            label="Nama karyawan"
            value={values?.name}
            onChangeText={(text) => setValues({ ...values!, name: text })}
          />
          <Input
            inputMode="email"
            label="Alamat email"
            value={values?.email}
            onChangeText={(text) => setValues({ ...values!, email: text })}
          />
          <Select
            withReset={false}
            options={["teknisi", "kasir"] as UserRole[]}
            label="Hak akses karyawan"
            value={karyawan?.role}
            onChange={(value) => {
              setValues({ ...values!, role: value as UserRole });
            }}
          />
        </Wrapper>
        <Button
          label="Simpan perubahan"
          icon="check"
          onPress={() => setShow(false)}
        />
      </BottomSheet>
    </>
  );
};

export default EditKaryawan;
