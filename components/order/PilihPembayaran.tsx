import { useGetPayment } from "@/hooks/setting/usePayment";
import { useColor } from "@/hooks/useColor";
import { generateAvatarLink } from "@/utils/helpers/text";
import { Pembayaran } from "@/utils/types/pembayaran";
import React, { FC, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import Wrapper from "../Wrapper";
import PembayaranItem from "../pembayaran/PembayaranItem";

type PilihPembayaranProps = {
  pembayaran: Pembayaran | null;
  onSave: (pembayaran: Pembayaran | null) => void;
};

const tunai: Pembayaran = {
  id: 0,
  name: "Pembayaran tunai",
  account_number: "cash",
  bank: {
    id: 0,
    name: "Tunai",
    logo: generateAvatarLink("Pembayaran tunai"),
  },
  bank_id: 0,
};

const PilihPembayaran: FC<PilihPembayaranProps> = ({ onSave, pembayaran }) => {
  const { color } = useColor();
  const [show, setShow] = useState<boolean>(false);
  const { data: payments } = useGetPayment();
  const [selected, setSelected] = useState<Pembayaran | null>(pembayaran);

  return (
    <>
      <TouchableOpacity onPress={() => setShow(true)}>
        <PembayaranItem pembayaran={selected ?? tunai} color="input" />
      </TouchableOpacity>

      <BottomSheet
        title="Pilih metode pembayaran"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <ScrollView
          style={{ maxHeight: 400, borderRadius: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <Wrapper gap={5}>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor:
                  selected === null ? color.primary.bg : "transparent",
                borderRadius: 10,
              }}
              onPress={() => setSelected(null)}
              onLongPress={() => setSelected(null)}
            >
              <PembayaranItem pembayaran={tunai} />
            </TouchableOpacity>
            {payments?.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={{
                  borderWidth: 2,
                  borderColor:
                    selected?.id === item.id ? color.primary.bg : "transparent",
                  borderRadius: 10,
                }}
                onPress={() => setSelected(item)}
                onLongPress={() => setSelected(null)}
              >
                <PembayaranItem pembayaran={item} />
              </TouchableOpacity>
            ))}
          </Wrapper>
        </ScrollView>
        <Button
          label="Selesai pilih metode pembayaran"
          icon="check"
          color="primary"
          onPress={() => {
            onSave(selected);
            setShow(false);
          }}
        />
      </BottomSheet>
    </>
  );
};

export default PilihPembayaran;
