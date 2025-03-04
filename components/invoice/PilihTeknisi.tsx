import { useEditOrder } from "@/hooks/invoice/useOrder";
import { useGetKaryawan } from "@/hooks/setting/useKaryawan";
import { useColor } from "@/hooks/useColor";
import { Order } from "@/utils/types/order";
import { User } from "@/utils/types/user";
import React, { FC, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import Input from "../Input";
import Text from "../Text";
import Wrapper from "../Wrapper";
import KaryawanItem from "../karyawan/KaryawanItem";

type PilihTeknisiProps = {
  invoice: Order;
  teknisi?: User;
  onSave: (teknisi: User) => void;
};

const PilihTeknisi: FC<PilihTeknisiProps> = ({ invoice, teknisi, onSave }) => {
  const { color } = useColor();
  const [show, setShow] = useState<boolean>(false);
  const [selected, setSelected] = useState<User | undefined>(teknisi);

  const { data } = useGetKaryawan();
  const { mutateAsync, isPending, error } = useEditOrder();

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
              ?.filter((item) => item.role === "teknisi")
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
        {error && <ErrorMessage message={error.message} />}
        <Button
          label="Pilih teknisi"
          icon="check"
          loading={isPending}
          onPress={() => {
            mutateAsync({
              id: invoice.id,
              teknisi_id: selected?.id,
              status: "progress",
            }).then(() => {
              onSave(teknisi!);
              setShow(false);
            });
          }}
        />
      </BottomSheet>
    </>
  );
};

export default PilihTeknisi;
