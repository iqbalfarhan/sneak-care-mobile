import IconButton from "@/components/IconButton";
import Input from "@/components/Input";
import CreateKaryawan from "@/components/karyawan/CreateKaryawan";
import EditKaryawan from "@/components/karyawan/EditKaryawan";
import KaryawanItem from "@/components/karyawan/KaryawanItem";
import SwipeAction from "@/components/SwipeAction";
import TabPill from "@/components/TabPill";
import Wrapper from "@/components/Wrapper";
import apiKaryawan from "@/utils/apis/apiKaryawan";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const karyawanScreen = () => {
  const [search, setSearch] = useState<string>("");
  const [tab, setTab] = useState<string>("");
  const data = apiKaryawan.getKaryawan();

  return (
    <GestureHandlerRootView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper padding={20} gap={20}>
          <Input
            placeholder="Cari karyawan..."
            value={search}
            onChangeText={setSearch}
          />
          <TabPill
            options={["", "Kasir", "Teknisi"]}
            active={tab}
            setActive={setTab}
          />
          <Wrapper gap={5}>
            {data
              .filter((item) =>
                item.name
                  .toString()
                  .toLowerCase()
                  .includes(search.toLowerCase()) && tab === ""
                  ? true
                  : item.role === tab.toLowerCase(),
              )
              .map((karyawan) => (
                <SwipeAction
                  key={karyawan.id}
                  actions={
                    <>
                      <EditKaryawan karyawan={karyawan} />
                      <IconButton size="small" color="base" icon="trash" />
                    </>
                  }
                >
                  <KaryawanItem karyawan={karyawan} />
                </SwipeAction>
              ))}
          </Wrapper>
          <CreateKaryawan />
        </Wrapper>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default karyawanScreen;
