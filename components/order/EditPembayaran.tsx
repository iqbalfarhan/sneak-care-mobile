import { useGetDiscount } from "@/hooks/setting/useDiskon";
import { useGetPayment } from "@/hooks/setting/usePayment";
import { formatDate } from "@/utils/helpers/text";
import React, { FC, useState } from "react";
import { TouchableOpacity } from "react-native";
import Badge from "../Badge";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import DatePicker from "../DatePicker";
import Input from "../Input";
import Select from "../Select";
import Wrapper from "../Wrapper";

type EditPembayaranProps = {
  onSave: (pembayaran: {
    tanggal: string;
    metode: string;
    diskon: string;
    pengiriman: number;
  }) => void;
};

const EditPembayaran: FC<EditPembayaranProps> = ({ onSave }) => {
  const [show, setShow] = useState(false);
  const { data: diskons } = useGetDiscount();
  const { data: pembayarans } = useGetPayment();

  const [estimasi, setEstimasi] = useState<Date>(new Date());
  const [diskon, setDiskon] = useState<string>("");
  const [pengiriman, setPengiriman] = useState<string>();
  const [pembayaran, setPembayaran] = useState<string>(
    pembayarans?.[0]?.name ?? "",
  );
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
        <Wrapper gap={15}>
          <DatePicker
            value={estimasi}
            onChange={setEstimasi}
            label="Tanggal estimasi selesai"
          />
          <Select
            label="Metode pembayaran"
            placeholder="Pilih metode pembayaran"
            value={pembayaran}
            onChange={setPembayaran}
            options={pembayarans?.flatMap((item) => item.name) ?? []}
          />
          <Select
            label="Diskon"
            placeholder="Pilih diskon"
            value={diskon}
            onChange={setDiskon}
            options={diskons?.flatMap((item) => item.name) ?? []}
          />
          <Input
            label="Biaya pengiriman"
            placeholder="Biaya pengiriman"
            inputMode="numeric"
            value={pengiriman}
            onChangeText={setPengiriman}
          />
        </Wrapper>

        <Button
          label="Selesai"
          icon="check"
          onPress={() => {
            onSave({
              tanggal: estimasi ? formatDate(estimasi) : "",
              metode: pembayaran,
              diskon,
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
