import { useGetService } from "@/hooks/setting/useService";
import { useColor } from "@/hooks/useColor";
import { BarangLayanan, Layanan } from "@/utils/types/layanan";
import React, { FC, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import Badge from "../Badge";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import Input from "../Input";
import Wrapper from "../Wrapper";
import LayananItem from "../layanan/LayananItem";

type CreateBarangProps = {
  onSave: (barangLayanan: BarangLayanan) => void;
};

const CreateBarang: FC<CreateBarangProps> = ({ onSave }) => {
  const [show, setShow] = useState(false);
  const { data } = useGetService();
  const { color } = useColor();

  const [name, setName] = useState<string>("");
  const [layanan, setLayanan] = useState<Layanan>();
  return (
    <>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Badge label="Tambah barang" color="neutral" />
      </TouchableOpacity>

      <BottomSheet
        title="Tambah barang"
        visible={show}
        onRequestClose={() => setShow(!show)}
      >
        <Input
          placeholder="Nama sepatu dan ukuran"
          onChangeText={setName}
          value={name}
        />
        <ScrollView
          style={{ maxHeight: 400, borderRadius: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <Wrapper gap={5}>
            {data?.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={{
                  borderWidth: 2,
                  borderColor:
                    layanan?.id === item.id ? color.primary.bg : "transparent",
                  borderRadius: 10,
                }}
                onPress={() => {
                  setLayanan(item);
                }}
              >
                <LayananItem layanan={item} />
              </TouchableOpacity>
            ))}
          </Wrapper>
        </ScrollView>
        <Button
          label="Tambahkan"
          icon="check"
          disabled={name && layanan ? false : true}
          onPress={() => {
            onSave({
              name,
              layanan: layanan!,
            } as BarangLayanan);
            setShow(false);
            setName("");
            setLayanan(undefined);
          }}
        />
      </BottomSheet>
    </>
  );
};

export default CreateBarang;
