import Card from "@/components/Card";
import IconButton from "@/components/IconButton";
import BarangLayananItem from "@/components/order/BarangLayananItem";
import CreateBarang from "@/components/order/CreateBarang";
import EditPembayaran from "@/components/order/EditPembayaran";
import PilihPelanggan from "@/components/order/PilihPelanggan";
import PreviewInvoice from "@/components/order/PreviewInvoice";
import PelangganItem from "@/components/pelanggan/PelangganItem";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import {
  formatRupiah,
  generateBiayaLayanan,
  generateTotalPay,
} from "@/utils/helpers/currency";
import { Diskon } from "@/utils/types/diskon";
import { BarangLayanan } from "@/utils/types/layanan";
import { Pelanggan } from "@/utils/types/pelanggan";
import { Pembayaran } from "@/utils/types/pembayaran";
import dayjs from "dayjs";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

const OrderScreen = () => {
  const [pelanggan, setPelanggan] = useState<Pelanggan | null>(null);
  const [barang, setBarang] = useState<BarangLayanan[]>([]);
  const [paid, setPaid] = useState<boolean>(true);
  const [estimasi, setEstimasi] = useState<Date | null>(new Date());
  const [pembayaran, setPembayaran] = useState<Pembayaran | null>(null);
  const [pengiriman, setPengiriman] = useState<number>(0);
  const [diskon, setDiskon] = useState<Diskon | null>(null);

  const resetForm = () => {
    setPelanggan(null);
    setBarang([]);
    setPaid(true);
    setEstimasi(new Date());
    setPembayaran(null);
    setPengiriman(0);
    setDiskon(null);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Wrapper padding={20} gap={30}>
        <Wrapper gap={10}>
          <Wrapper
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text variant="menutitle">Pelanggan</Text>
            <PilihPelanggan onSelect={(pelanggan) => setPelanggan(pelanggan)} />
          </Wrapper>
          {pelanggan && (
            <TouchableOpacity onLongPress={() => setPelanggan(null)}>
              <PelangganItem pelanggan={pelanggan} />
            </TouchableOpacity>
          )}
        </Wrapper>

        <Wrapper gap={10}>
          <Wrapper
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text variant="menutitle">Barang & layanan</Text>
            <CreateBarang
              onSave={(barangLayanan) => setBarang([...barang, barangLayanan])}
            />
          </Wrapper>
          {barang.map((item, index) => (
            <TouchableOpacity
              key={index}
              onLongPress={() =>
                setBarang(barang.filter((sepatu) => sepatu !== item))
              }
            >
              <BarangLayananItem item={item} />
            </TouchableOpacity>
          ))}
        </Wrapper>

        <Wrapper gap={10}>
          <Wrapper
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text variant="menutitle">Pembayaran</Text>
            <EditPembayaran
              value={{
                tanggal: estimasi,
                metode: pembayaran,
                pengiriman: pengiriman,
                diskon: diskon,
                paid: paid,
              }}
              onSave={(pembayaran) => {
                setEstimasi(pembayaran.tanggal);
                setPembayaran(pembayaran.metode);
                setPengiriman(pembayaran.pengiriman);
                setDiskon(pembayaran.diskon);
                setPaid(pembayaran.paid);
              }}
            />
          </Wrapper>
          <Card
            footer={
              <Wrapper flexDirection="row" justifyContent="space-between">
                <Text variant="label">Total bayar</Text>
                <Text variant="subtitle">
                  {formatRupiah(generateTotalPay(barang, diskon, pengiriman))}
                </Text>
              </Wrapper>
            }
          >
            <Wrapper>
              <Wrapper flexDirection="row" justifyContent="space-between">
                <Text variant="label">Estimasi selesai</Text>
                <Text>{dayjs(estimasi).format("DD MMMM YYYY")}</Text>
              </Wrapper>
              <Wrapper flexDirection="row" justifyContent="space-between">
                <Text variant="label">Metode bayar</Text>
                <Text>{pembayaran?.name ?? "Pembayaran tunai"}</Text>
              </Wrapper>
              <Wrapper flexDirection="row" justifyContent="space-between">
                <Text variant="label">Biaya layanan</Text>
                <Text>{formatRupiah(generateBiayaLayanan(barang))}</Text>
              </Wrapper>
              <Wrapper flexDirection="row" justifyContent="space-between">
                <Text variant="label">Diskon</Text>
                <Text>
                  {diskon
                    ? diskon?.type === "amount"
                      ? formatRupiah(diskon?.value)
                      : diskon?.value + "%"
                    : ""}
                </Text>
              </Wrapper>
              <Wrapper flexDirection="row" justifyContent="space-between">
                <Text variant="label">Biaya pengiriman</Text>
                <Text>{formatRupiah(pengiriman)}</Text>
              </Wrapper>
            </Wrapper>
          </Card>
        </Wrapper>

        <Wrapper
          gap={10}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton icon="x" color="neutral" onPress={resetForm} />
          <PreviewInvoice
            onSuccess={resetForm}
            style={{ flex: 1 }}
            payload={{
              customer_id: pelanggan?.id ?? null,
              payment_id: pembayaran?.id ?? null,
              discount_id: diskon?.id ?? null,
              estimate_date: estimasi
                ? dayjs(estimasi).format("YYYY-MM-DD")
                : null,
              shipping_cost: pengiriman,
              barang: barang.map((item) => ({
                name: item.name,
                service_id: item.layanan.id,
              })),
              paid: paid,
              total_pay: generateTotalPay(barang, diskon, pengiriman),
            }}
          />
        </Wrapper>
      </Wrapper>
    </ScrollView>
  );
};

export default OrderScreen;
