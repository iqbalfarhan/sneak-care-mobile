import { useColor } from "@/hooks/useColor";
import { Stack } from "expo-router";
import * as SystemUI from "expo-system-ui";
import React from "react";

const SettingLayout = () => {
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
      <Stack.Screen name="profile" options={{ title: "Edit profile" }} />
      <Stack.Screen name="toko" options={{ title: "Profile toko" }} />
      <Stack.Screen name="diskon" options={{ title: "Diskon" }} />
      <Stack.Screen name="layanan" options={{ title: "Kategori & layanan" }} />
      <Stack.Screen
        name="pembayaran"
        options={{ title: "Metode pembayaran" }}
      />
      <Stack.Screen name="karyawan" options={{ title: "Daftar karyawan" }} />
      <Stack.Screen name="pelanggan" options={{ title: "List pelanggan" }} />
      <Stack.Screen name="premium" options={{ title: "Fitur premium" }} />
    </Stack>
  );
};

export default SettingLayout;
