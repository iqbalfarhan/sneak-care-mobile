import Button from "@/components/Button";
import Card from "@/components/Card";
import InvoiceCard from "@/components/invoice/InvoiceCard";
import MoreActions from "@/components/invoice/MoreActions";
import PilihTeknisi from "@/components/invoice/PilihTeknisi";
import KaryawanItem from "@/components/karyawan/KaryawanItem";
import Loading from "@/components/Loading";
import BarangLayananItem from "@/components/order/BarangLayananItem";
import PelangganItem from "@/components/pelanggan/PelangganItem";
import Text from "@/components/Text";
import Timeline from "@/components/Timeline";
import Wrapper from "@/components/Wrapper";
import { useColor } from "@/hooks/useColor";
import apiOrder from "@/utils/apis/apiOrder";
import { formatRupiah } from "@/utils/helpers/currency";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, ToastAndroid } from "react-native";

const InvoiceDetail = () => {
  const { color } = useColor();
  const { id } = useLocalSearchParams();
  const data = apiOrder.getOrderById(Number(id));

  if (!data) return <Loading />;

  const kasir = data.kasir;
  const teknisi = data.teknisi;
  const barang = data.barang;
  const pelanggan = data.pelanggan;
  const pembayaran = data.payment;
  const diskon = data.diskon;
  const shipping = data.shipping_cost;

  return (
    <Wrapper flex={1}>
      <Wrapper flex={1}>
        <ScrollView>
          <Wrapper padding={20} gap={20}>
            <InvoiceCard invoice={data} />
            <Wrapper gap={5}>
              <Text>Pelanggan</Text>
              <PelangganItem pelanggan={pelanggan} />
            </Wrapper>
            <Wrapper gap={5}>
              <Text>Barang & layanan</Text>
              {barang.map((barang, index) => (
                <BarangLayananItem item={barang} key={index} />
              ))}
            </Wrapper>
            <Wrapper gap={5}>
              <Text>Informasi pembayaran</Text>
              <Card
                footer={
                  <Wrapper flexDirection="row" justifyContent="space-between">
                    <Text variant="label">Total bayar</Text>
                    <Text variant="subtitle" color={color.primary.bg}>
                      {formatRupiah(110000)}
                    </Text>
                  </Wrapper>
                }
              >
                <Wrapper>
                  <Wrapper flexDirection="row" justifyContent="space-between">
                    <Text variant="label">Estimasi selesai</Text>
                    <Text>{data.estimate_date.toDateString()}</Text>
                  </Wrapper>
                  <Wrapper flexDirection="row" justifyContent="space-between">
                    <Text variant="label">Metode bayar</Text>
                    <Text>{pembayaran.name}</Text>
                  </Wrapper>
                  <Wrapper flexDirection="row" justifyContent="space-between">
                    <Text variant="label">Diskon</Text>
                    <Text>{diskon?.value}</Text>
                  </Wrapper>
                  <Wrapper flexDirection="row" justifyContent="space-between">
                    <Text variant="label">Biaya pengiriman</Text>
                    <Text>{formatRupiah(shipping)}</Text>
                  </Wrapper>
                  <Wrapper flexDirection="row" justifyContent="space-between">
                    <Text variant="label">Biaya layanan</Text>
                    <Text>
                      {formatRupiah(
                        barang
                          .flatMap((item) => item.layanan.price)
                          .reduce((acc, curr) => acc + curr, 0),
                      )}
                    </Text>
                  </Wrapper>
                </Wrapper>
              </Card>
            </Wrapper>
            <Wrapper gap={5}>
              <Text>Petugas</Text>
              <KaryawanItem karyawan={kasir} />
              <PilihTeknisi
                teknisi={teknisi}
                onSave={(teknisi) => {
                  data.teknisi = teknisi;
                  ToastAndroid.show(
                    "Teknisi berhasil diubah",
                    ToastAndroid.SHORT,
                  );
                }}
              />
            </Wrapper>
            <Wrapper gap={5}>
              <Text>Order timeline</Text>
              <Timeline
                steps={[
                  {
                    title: "Order dibuat",
                    date: "2023-05-01 12:00:00",
                    icon: "clock",
                  },
                  {
                    title: "Pickup order oleh teknisi",
                    date: "2023-05-01 10:45:10",
                    icon: "question",
                  },
                  {
                    title: "Dalam progres oleh teknisi",
                    date: "2023-05-01 10:23:00",
                    icon: "circle-slash",
                  },
                  {
                    title: "Order selesai",
                    date: "2023-05-01 13:11:11",
                    icon: "calendar",
                  },
                  {
                    title: "Barang diambil oleh pelanggan",
                    date: "2023-05-01 23:22:11",
                    icon: "check",
                  },
                ]}
              />
            </Wrapper>
          </Wrapper>
        </ScrollView>
      </Wrapper>
      <Wrapper flex={0} padding={20} gap={10}>
        <Wrapper gap={10} flexDirection="row">
          <MoreActions />
          <Button
            label="Cetak resi untuk teknisi"
            color="input"
            icon="flame"
            style={{ flex: 1 }}
          />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default InvoiceDetail;
