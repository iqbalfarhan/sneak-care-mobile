import { Diskon } from "@/utils/types/diskon";
import { Pembayaran } from "@/utils/types/pembayaran";
import React, { FC, useState } from "react";
import { TouchableOpacity } from "react-native";
import Badge from "../Badge";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import DatePicker from "../DatePicker";
import FormControl from "../FormControl";
import FormGroup from "../FormGroup";
import Input from "../Input";
import Radio from "../Radio";
import PilihDiskon from "./PilihDiskon";
import PilihPembayaran from "./PilihPembayaran";

type EditPembayaranProps = {
  value: {
    tanggal: Date | null;
    metode: Pembayaran | null;
    diskon: Diskon | null;
    pengiriman: number;
    paid: boolean;
  };
  onSave: (pembayaran: {
    tanggal: Date | null;
    metode: Pembayaran | null;
    diskon: Diskon | null;
    pengiriman: number;
    paid: boolean;
  }) => void;
};

const EditPembayaran: FC<EditPembayaranProps> = ({ value, onSave }) => {
  const [show, setShow] = useState(false);

  const [estimasi, setEstimasi] = useState<Date>(value.tanggal ?? new Date());
  const [pengiriman, setPengiriman] = useState<number>(value.pengiriman);
  const [paid, setPaid] = useState<boolean>(value.paid);
  const [diskon, setDiskon] = useState<Diskon | null>(value.diskon);
  const [pembayaran, setPembayaran] = useState<Pembayaran | null>(value.metode);

  return (
    <>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Badge label="Edit pembayaran" color="neutral" />
      </TouchableOpacity>

      <BottomSheet
        title="Edit pembayaran"
        visible={show}
        onRequestClose={() => setShow(!show)}
      >
        <FormGroup>
          <DatePicker
            value={estimasi}
            onChange={setEstimasi}
            label="Tanggal estimasi selesai"
          />
          <FormControl label="Pilih metode pembayaran">
            <PilihPembayaran onSave={setPembayaran} pembayaran={pembayaran} />
          </FormControl>
          <FormControl label="Pilih diskon">
            <PilihDiskon onSave={setDiskon} diskon={diskon} />
          </FormControl>
          <Input
            label="Biaya pengiriman"
            placeholder="Biaya pengiriman"
            inputMode="numeric"
            value={pengiriman.toString()}
            onChangeText={(text) => setPengiriman(Number(text))}
          />
          <Radio
            color="input"
            label="Waktu pembayaran"
            options={["Bayar sekarang", "Bayar nanti"]}
            value={paid ? "Bayar sekarang" : "Bayar nanti"}
            onChange={(value) =>
              setPaid(value == "Bayar sekarang" ? true : false)
            }
          />
        </FormGroup>

        <Button
          label="Selesai"
          icon="check"
          onPress={() => {
            onSave({
              tanggal: estimasi,
              metode: pembayaran,
              diskon: diskon,
              paid,
              pengiriman: pengiriman ? Number(pengiriman) : 0,
            });
            setShow(false);
          }}
        />
      </BottomSheet>
    </>
  );
};

export default EditPembayaran;
