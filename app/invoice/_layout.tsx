import { useColor } from "@/hooks/useColor";
import { Stack } from "expo-router";
import * as SystemUI from "expo-system-ui";
import React from "react";

const InvoiceLayout = () => {
  const { color } = useColor();
  SystemUI.setBackgroundColorAsync(color.base.bg);

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
