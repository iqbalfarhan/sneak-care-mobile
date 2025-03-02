import { UserRole } from "@/utils/types/user";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import Input from "../Input";
import PasswordToggler from "../PasswordToggler";
import Select from "../Select";
import Wrapper from "../Wrapper";

const CreateKaryawan = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<UserRole>("teknisi");
  const [password, setPassword] = useState<string>("");

  return (
    <GestureHandlerRootView>
      <Button
        label="Tambah karyawan"
        icon="plus"
        onPress={() => setShow(true)}
      />
      <BottomSheet
        visible={show}
        title="Create karyawan"
        onRequestClose={() => setShow(false)}
      >
        <Wrapper gap={10}>
          <Input
            label="Nama karyawan"
            placeholder="Nama karyawan"
            value={name}
            onChangeText={setName}
          />
          <Input
            label="Email"
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
          />
          <Select
            label="Hak akses karyawan"
            placeholder="Pilih role karyawan"
            options={["kasir", "teknisi"]}
            value={role}
            onChange={(role) => setRole(role as UserRole)}
          />
          <Input
            secureTextEntry={!showPass}
            label="Password"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <PasswordToggler show={showPass} setShow={setShowPass} />
        </Wrapper>
        <Button label="Simpan karyawan baru" icon="check" />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default CreateKaryawan;
