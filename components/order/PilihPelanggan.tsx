import { useGetCustomers } from "@/hooks/setting/useCustomer";
import { Pelanggan } from "@/utils/types/pelanggan";
import React, { FC, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import Badge from "../Badge";
import BottomSheet from "../BottomSheet";
import Input from "../Input";
import CreatePelanggan from "../pelanggan/CreatePelanggan";
import PelangganItem from "../pelanggan/PelangganItem";

type PilihPelangganProps = {
  onSelect: (pelanggan: Pelanggan) => void;
};

const PilihPelanggan: FC<PilihPelangganProps> = ({ onSelect }) => {
  const [search, setSearch] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const { data, isLoading, refetch } = useGetCustomers();
  return (
    <>
      <TouchableOpacity onPress={() => setShow(true)}>
        <Badge label="Pilih pelanggan" color="neutral" />
      </TouchableOpacity>

      <BottomSheet
        title="Pilih pelanggan"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <Input
          placeholder="Cari pelanggan"
          value={search}
          onChangeText={setSearch}
        />
        <FlatList
          style={{ maxHeight: 400, borderRadius: 10 }}
          contentContainerStyle={{ gap: 5 }}
          data={data?.filter((item) =>
            item.name.toString().toLowerCase().includes(search.toLowerCase()),
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                onSelect(item);
                setShow(false);
              }}
            >
              <PelangganItem pelanggan={item} />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />

        <CreatePelanggan />
      </BottomSheet>
    </>
  );
};

export default PilihPelanggan;
