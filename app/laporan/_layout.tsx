import { useColor } from "@/hooks/useColor";
import { Stack } from "expo-router";
import * as SystemUI from "expo-system-ui";
import React from "react";

const LaporanLayout = () => {
  const { color } = useColor();
  SystemUI.setBackgroundColorAsync(color.base.bg);

  return (
    <Stack
      screenOptions={{
        headerShown: true,
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
      <Stack.Screen name="teknisi" options={{ title: "Kinerja teknisi" }} />
      <Stack.Screen name="layanan" options={{ title: "Laporan layanan" }} />
      <Stack.Screen
        name="pendapatan"
        options={{ title: "Laporan pendapatan" }}
      />
    </Stack>
  );
};

export default LaporanLayout;
