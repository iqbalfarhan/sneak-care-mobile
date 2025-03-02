import { useColor } from "@/hooks/useColor";
import { Octicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import MenuItem from "../MenuItem";
import Wrapper from "../Wrapper";

const ThemeChanger = () => {
  const { theme, setTheme } = useColor();
  const [show, setShow] = useState<boolean>(false);

  const colorSchema = useColorScheme() == "dark" ? "dark" : "light";
  const selectedTheme: ColorSchemeName =
    theme === "light" || theme === "dark" ? theme : colorSchema;

  const themeDescription = (theme: ColorSchemeName) => {
    switch (theme) {
      case "dark":
        return "Tema gelap";
      case "light":
        return "Tema terang";
      case null:
        return "Sesuaikan perangkat";
      default:
        return "Tema gelap";
    }
  };

  const themeOptions: {
    id: number;
    label: string;
    value: string | null;
    icon: keyof typeof Octicons.glyphMap;
    onPress: () => void;
  }[] = [
    {
      id: 1,
      label: "Tema gelap",
      value: "dark",
      icon: "moon",
      onPress: () => {
        setTheme("dark");
      },
    },
    {
      id: 2,
      label: "Tema terang",
      value: "light",
      icon: "sun",
      onPress: () => {
        setTheme("light");
      },
    },
    {
      id: 3,
      label: "Sesuaikan perangkat",
      value: null,
      icon: "device-desktop",
      onPress: () => {
        setTheme(null);
      },
    },
  ];
  return (
    <>
      <MenuItem
        title="Tema aplikasi"
        subtitle={`Saat ini ${themeDescription(theme)}`}
        icon={
          theme == "dark" ? "moon" : theme == "light" ? "sun" : "device-desktop"
        }
        onPress={() => setShow(true)}
      />

      <BottomSheet
        title="Ganti tema aplikasi"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <Wrapper gap={5}>
          {themeOptions.map((item) => (
            <Button
              color={theme === item.value ? "primary" : "card"}
              key={item.id}
              label={item.label}
              icon={item.icon}
              style={{ justifyContent: "flex-start" }}
              onPress={() => {
                item.onPress();
                setShow(false);
              }}
            />
          ))}
        </Wrapper>
      </BottomSheet>

      <StatusBar
        style={selectedTheme == "dark" ? "light" : "dark"}
        animated={true}
      />
    </>
  );
};

export default ThemeChanger;
