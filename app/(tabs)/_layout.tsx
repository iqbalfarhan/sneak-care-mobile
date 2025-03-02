import Loading from "@/components/Loading";
import { useColor } from "@/hooks/useColor";
import { useSession } from "@/hooks/useSession";
import { Octicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  const { color } = useColor();
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Loading />;
  }

  if (!session) {
    return <Redirect href="/(auth)/intro" />;
  }

  return (
    <Tabs
      screenOptions={{
        sceneStyle: { backgroundColor: color.base.bg },
        headerStyle: {
          backgroundColor: color.base.bg,
          borderBottomWidth: 0,
          elevation: 0,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "SemiBold",
          color: color.base.content,
        },
        headerTintColor: color.base.content as string,
        tabBarActiveTintColor: color.primary.bg as string,
        tabBarInactiveTintColor: "#808080",
        tabBarStyle: {
          backgroundColor: color.base.bg,
          borderTopWidth: 0,
          elevation: 0,
          height: 70,
        },
        tabBarItemStyle: {
          height: 70,
          paddingVertical: 10,
        },
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontFamily: "Medium",
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Sneak Care",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="invoice"
        options={{
          title: "Invoice",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="archive" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Buat pesanan",
          tabBarLabel: "Pesanan",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="diff-added" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="laporan"
        options={{
          title: "Laporan",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="stack" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Pengaturan",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="gear" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
