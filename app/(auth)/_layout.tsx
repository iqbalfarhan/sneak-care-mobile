import { useColor } from "@/hooks/useColor";
import { Stack } from "expo-router";
import * as SystemUI from "expo-system-ui";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const AuthLayout = () => {
  const { color } = useColor();
  SystemUI.setBackgroundColorAsync(color.base.bg ?? "black");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          headerLargeTitle: true,
          contentStyle: { backgroundColor: color.base.bg },
        }}
      >
        <Stack.Screen name="intro" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="reset-password" />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default AuthLayout;
