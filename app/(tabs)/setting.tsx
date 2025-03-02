import MenuItem from "@/components/MenuItem";
import ThemeChanger from "@/components/setting/ThemeChanger";
import UserCard from "@/components/setting/UserCard";
import Wrapper from "@/components/Wrapper";
import { useSession } from "@/hooks/useSession";
import { router } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";

const SettingScreen = () => {
  const { signOut } = useSession();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Wrapper padding={20} paddingTop={0}>
        <UserCard />
      </Wrapper>
      <Wrapper padding={20} gap={5}>
        <MenuItem
          title="Fitur premium"
          subtitle="Edit nama, alamat, social media dan logo toko"
          icon="flame"
          onPress={() => router.push("/setting/premium")}
        />
        <MenuItem
          title="Pengaturan akun"
          subtitle="Edit nama, alamat, social media dan logo toko"
          icon="person"
          onPress={() => router.push("/setting/profile")}
        />
        <MenuItem
          title="Profile toko"
          subtitle="Edit nama, alamat, social media dan logo toko"
          icon="home"
          onPress={() => router.push("/setting/toko")}
        />
      </Wrapper>
      <Wrapper padding={20} gap={5}>
        <MenuItem
          title="Diskon"
          subtitle="Pengaturan data diskon"
          icon="tag"
          onPress={() => router.push("/setting/diskon")}
        />
        <MenuItem
          title="Kategori dan layanan"
          subtitle="Daftar layanan dan kategori"
          icon="copy"
          onPress={() => router.push("/setting/layanan")}
        />
        <MenuItem
          title="Metode pembayaran"
          subtitle="Pengaturan metode pembayaran customer"
          icon="credit-card"
          onPress={() => router.push("/setting/pembayaran")}
        />
        <MenuItem
          title="Daftar karyawan"
          subtitle="List teknisi dan kasir toko"
          icon="person"
          onPress={() => router.push("/setting/karyawan")}
        />
        <MenuItem
          title="List pelanggan"
          subtitle="List pelanggan toko"
          icon="heart"
          onPress={() => router.push("/setting/pelanggan")}
        />
      </Wrapper>
      <Wrapper padding={20} gap={5}>
        <ThemeChanger />
        <MenuItem
          title="Keluar aplikasi"
          subtitle="Keluar dari aplikasi"
          icon="sign-out"
          onPress={() => signOut()}
        />
      </Wrapper>
    </ScrollView>
  );
};

export default SettingScreen;
