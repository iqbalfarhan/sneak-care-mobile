import { useCreateKaryawan } from "@/hooks/setting/useKaryawan";
import { User, UserRole } from "@/utils/types/user";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import FormGroup from "../FormGroup";
import Input from "../Input";
import PasswordToggler from "../PasswordToggler";
import Select from "../Select";

const CreateKaryawan = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<UserRole>("teknisi");
  const [password, setPassword] = useState<string>("");

  const { mutateAsync, isPending, error } = useCreateKaryawan();

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
        <FormGroup>
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
        </FormGroup>
        {error && <ErrorMessage message={error.message} />}
        <Button
          disabled={isPending}
          label="Simpan karyawan baru"
          icon="check"
          onPress={() => {
            mutateAsync({ name, email, role, password } as User).then(() => {
              setShow(false);
              setName("");
              setEmail("");
              setRole("kasir");
              setPassword("");
            });
          }}
        />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default CreateKaryawan;
