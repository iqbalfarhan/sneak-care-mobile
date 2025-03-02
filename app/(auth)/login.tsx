import Button from "@/components/Button";
import Input from "@/components/Input";
import PasswordToggler from "@/components/PasswordToggler";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import useLogin from "@/hooks/authentication/useLogin";
import { useColor } from "@/hooks/useColor";
import { useSession } from "@/hooks/useSession";
import { Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("iqbalfarhan1996@gmail.com");
  const [password, setPassword] = useState<string>("adminoke");
  const [show, setShow] = useState<boolean>(false);
  const { signIn } = useSession();
  const { color } = useColor();

  const { mutateAsync, isPending, error } = useLogin();

  const handleLogin = async () => {
    mutateAsync({ email, password })
      .then((token) => {
        signIn(token);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper
      padding={40}
      alignItems="center"
      justifyContent="center"
      flex={1}
      gap={30}
    >
      <Octicons name="code-of-conduct" color={color.primary.bg} size={82} />
      {error && <Text color={color.error.bg}>{error.message}</Text>}
      <Wrapper width={"100%"} gap={10}>
        <Input
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          secureTextEntry={!show}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Wrapper flexDirection="row" justifyContent="space-between">
          <Text variant="label" onPress={() => router.push("/reset-password")}>
            Reset password
          </Text>
          <PasswordToggler show={show} setShow={setShow} />
        </Wrapper>
      </Wrapper>
      <Wrapper gap={5} width={"100%"}>
        <Button
          label="Login as owner"
          icon="sign-in"
          onPress={handleLogin}
          disabled={isPending}
        />
      </Wrapper>
      <Text onPress={() => router.push("/register")}>
        Saya mau buat akun untuk bisnis saya
      </Text>
    </Wrapper>
  );
};

export default LoginScreen;
