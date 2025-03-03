import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";
import PasswordToggler from "@/components/PasswordToggler";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import useRegister from "@/hooks/authentication/useRegister";
import { useColor } from "@/hooks/useColor";
import { useSession } from "@/hooks/useSession";
import { Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";

const RegisterScreen = () => {
  const [show, setShow] = useState<boolean>(false);
  const { signIn } = useSession();
  const { color } = useColor();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password_confirmation, setConfirm] = useState<string>("");

  const { mutateAsync, isPending, error } = useRegister();
  return (
    <Wrapper
      padding={40}
      alignItems="center"
      justifyContent="center"
      flex={1}
      gap={30}
    >
      <Octicons name="code-of-conduct" color={color.primary.bg} size={82} />
      <Wrapper width={"100%"} gap={10}>
        <Text>
          Daftarkan bisnis anda untuk memulai aplikasi. setelah form ini anda
          akan masuk sebagai pemilik bisnis.
        </Text>
      </Wrapper>
      <Wrapper width={"100%"} gap={10}>
        <Input
          placeholder="Bussiness brand name"
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="Bussiness Email address"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Input
          placeholder="Password confirmation"
          value={password_confirmation}
          onChangeText={setConfirm}
        />
        <PasswordToggler show={show} setShow={setShow} />
      </Wrapper>
      {error && <ErrorMessage message={error.message} />}
      <Button
        disabled={isPending}
        label="Register as owner"
        icon="person-add"
        onPress={() => {
          mutateAsync({
            name,
            email,
            password,
            password_confirmation,
          }).then((token) => {
            signIn(token);
            router.push("/");
          });
        }}
      />
      <Text onPress={() => router.push("/login")}>
        I already have an account
      </Text>
    </Wrapper>
  );
};

export default RegisterScreen;
