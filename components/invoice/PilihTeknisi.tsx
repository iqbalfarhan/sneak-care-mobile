import { useColor } from "@/hooks/useColor";
import apiKaryawan from "@/utils/apis/apiKaryawan";
import { User } from "@/utils/types/user";
import React, { FC, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import Input from "../Input";
import Text from "../Text";
import Wrapper from "../Wrapper";
import KaryawanItem from "../karyawan/KaryawanItem";

type PilihTeknisiProps = {
  teknisi?: User;
  onSave: (teknisi: User) => void;
};

const PilihTeknisi: FC<PilihTeknisiProps> = ({ teknisi, onSave }) => {
  const { color } = useColor();
  const [show, setShow] = useState<boolean>(false);
  const data = apiKaryawan.getKaryawan();
  const [selected, setSelected] = useState<User | undefined>(teknisi);
  return (
    <>
      {selected ? (
        <TouchableOpacity onPress={() => setShow(true)}>
          <KaryawanItem karyawan={selected} />
        </TouchableOpacity>
      ) : (
        <Button
          label="Pilih teknisi"
          icon="person"
          onPress={() => setShow(true)}
          color="neutral"
        />
      )}

      <BottomSheet
        visible={show}
        title="Pilih teknisi"
        onRequestClose={() => setShow(false)}
      >
        <Input placeholder="Cari teknisi" />
        <ScrollView
          style={{ maxHeight: 400, borderRadius: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <Wrapper gap={5}>
            {data
              .filter((item) => item.role === "teknisi")
              .map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    borderWidth: 2,
                    borderColor:
                      selected?.id === item.id
                        ? color.primary.bg
                        : "transparent",
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    setSelected(item);
                  }}
                >
                  <KaryawanItem karyawan={item} />
                </TouchableOpacity>
              ))}
          </Wrapper>
        </ScrollView>
        <Text variant="label">
          Setelah pilih karyawan status order akan otomatis berubah ke progress
        </Text>
        <Button
          label="Pilih teknisi"
          icon="check"
          onPress={() => {
            onSave(teknisi!);
            setShow(false);
          }}
        />
      </BottomSheet>
    </>
  );
};

export default PilihTeknisi;
