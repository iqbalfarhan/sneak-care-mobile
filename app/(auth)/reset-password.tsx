import Button from "@/components/Button";
import Input from "@/components/Input";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import { useColor } from "@/hooks/useColor";
import { Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState<string>("iqbalfarhan1996@gmail.com");
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
      <Text>
        We will send you a link for reset your password by your email as you
        write below.
      </Text>
      <Wrapper width={"100%"} gap={10}>
        <Input
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
        />
      </Wrapper>
      <Button
        label="Send Reset Password"
        icon="paper-airplane"
        onPress={() => {
          router.push("/");
        }}
      />
      <Text onPress={() => router.push("/login")}>Back to sign-in screen</Text>
    </Wrapper>
  );
};

export default ResetPasswordScreen;
