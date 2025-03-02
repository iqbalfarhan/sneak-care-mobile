import Button from "@/components/Button";
import Input from "@/components/Input";
import PasswordToggler from "@/components/PasswordToggler";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import { useColor } from "@/hooks/useColor";
import { useSession } from "@/hooks/useSession";
import { Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";

const RegisterScreen = () => {
  const [show, setShow] = useState<boolean>(false);
  const { signIn } = useSession();
  const { color } = useColor();
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
        <Input placeholder="Bussiness brand name" />
        <Input placeholder="Bussiness Email address" />
        <Input placeholder="Password" />
        <Input placeholder="Password confirmation" />
        <PasswordToggler show={show} setShow={setShow} />
      </Wrapper>
      <Button
        label="Register as owner"
        icon="person-add"
        onPress={() => {
          signIn("cc");
          router.push("/");
        }}
      />
      <Text onPress={() => router.push("/login")}>
        I already have an account
      </Text>
    </Wrapper>
  );
};

export default RegisterScreen;
