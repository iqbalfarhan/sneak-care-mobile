import { ThemeProvider, useColor } from "@/hooks/useColor";
import { SessionProvider } from "@/hooks/useSession";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const { color } = useColor();
  SystemUI.setBackgroundColorAsync(color.base.bg ?? "black");

  const [loaded, error] = useFonts({
    Black: require("../assets/fonts/Geologica-Black.ttf"),
    Bold: require("../assets/fonts/Geologica-Bold.ttf"),
    Medium: require("../assets/fonts/Geologica-Medium.ttf"),
    SemiBold: require("../assets/fonts/Geologica-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={new QueryClient()}>
      <SessionProvider>
        <ThemeProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              presentation: "card",
            }}
          >
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="invoice" />
            <Stack.Screen name="laporan" />
            <Stack.Screen name="setting" />
          </Stack>
        </ThemeProvider>
        <StatusBar style={"auto"} animated={true} />
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
