import Loading from "@/components/Loading";
import Wrapper from "@/components/Wrapper";
import { useColor } from "@/hooks/useColor";
import { useSession } from "@/hooks/useSession";
import { Redirect, Stack } from "expo-router";
import * as SystemUI from "expo-system-ui";
import React from "react";

const InvoiceLayout = () => {
  const { color } = useColor();
  SystemUI.setBackgroundColorAsync(color.base.bg);

  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <Wrapper backgroundColor={color.base.bg} flex={1}>
        <Loading />
      </Wrapper>
    );
  }

  if (!session) {
    return <Redirect href="/(auth)/intro" />;
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: color.base.bg },
        headerTitleStyle: {
          fontFamily: "SemiBold",
          color: color.base.content as string,
        },
        headerTintColor: color.base.content as string,
        headerStyle: {
          backgroundColor: color.base.bg as string,
        },
      }}
    >
      <Stack.Screen name="[id]" options={{ title: "Invoice detail" }} />
    </Stack>
  );
};

export default InvoiceLayout;
