import { createContext, PropsWithChildren, useContext } from "react";
import { ColorSchemeName, ColorValue, useColorScheme } from "react-native";
import { useStorageState } from "./useStorageState";

type ColorScheme = {
  bg: ColorValue;
  content: ColorValue;
};

export type ThemeColors = {
  primary: ColorScheme;
  secondary: ColorScheme;
  accent: ColorScheme;
  neutral: ColorScheme;
  base: ColorScheme;
  info: ColorScheme;
  success: ColorScheme;
  warning: ColorScheme;
  error: ColorScheme;
  card: ColorScheme;
  input: ColorScheme;
};

type Colors = {
  light: ThemeColors;
  dark: ThemeColors;
};

const colors: Colors = {
  light: {
    primary: {
      bg: "#4509da",
      content: "#d1dbff",
    },
    secondary: {
      bg: "#fe00d2",
      content: "#fff9fd",
    },
    accent: {
      bg: "#00d7c0",
      content: "#01110e",
    },
    neutral: {
      bg: "#2b3240",
      content: "#d6dee5",
    },
    base: {
      bg: "white",
      content: "black",
    },
    info: {
      bg: "#00b5ff",
      content: "black",
    },
    success: {
      bg: "#01aa6f",
      content: "black",
    },
    warning: {
      bg: "#febe00",
      content: "black",
    },
    error: {
      bg: "#ff5860",
      content: "black",
    },
    card: {
      bg: "#f2f2f2",
      content: "#202939",
    },
    input: {
      bg: "#e5e7e7",
      content: "#202939",
    },
  },
  dark: {
    primary: {
      bg: "#7580ff",
      content: "#050618",
    },
    secondary: {
      bg: "#fe52d8",
      content: "#190212",
    },
    accent: {
      bg: "#00cdb8",
      content: "#000f0c",
    },
    neutral: {
      bg: "#2a333c",
      content: "#a5aebb",
    },
    base: {
      bg: "#1d222b",
      content: "#a6aebb",
    },
    info: {
      bg: "#00b6ff",
      content: "black",
    },
    success: {
      bg: "#00a96e",
      content: "black",
    },
    warning: {
      bg: "#febe00",
      content: "black",
    },
    error: {
      bg: "#ff5860",
      content: "black",
    },
    card: {
      bg: "#191e24",
      content: "#a5aebc",
    },
    input: {
      bg: "#16181d",
      content: "#a5aebc",
    },
  },
};

const ThemeContext = createContext<{
  theme: ColorSchemeName;
  setTheme: (theme: ColorSchemeName) => void;
  color: ThemeColors;
  isLoading: boolean;
}>({
  theme: "light",
  setTheme: () => {},
  color: colors.light,
  isLoading: false,
});

export const useColor = () => {
  const value = useContext(ThemeContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
};

export function ThemeProvider({ children }: PropsWithChildren) {
  const [[isLoading, theme], changeTheme] = useStorageState("theme");
  const colorSchema = useColorScheme() == "dark" ? "dark" : "light";
  const selectedTheme: ColorSchemeName =
    theme === "light" || theme === "dark" ? theme : colorSchema;

  const color = colors[selectedTheme];

  return (
    <ThemeContext.Provider
      value={{
        setTheme: (theme) => {
          changeTheme(theme as string | null);
        },
        theme: theme as ColorSchemeName,
        color,
        isLoading,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
