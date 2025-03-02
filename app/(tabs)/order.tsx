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
import { formatRupiah } from "@/utils/helpers/currency";
import { BarangLayanan } from "@/utils/types/layanan";
import { Pelanggan } from "@/utils/types/pelanggan";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

const OrderScreen = () => {
  const [pelanggan, setPelanggan] = useState<Pelanggan>();
  const [barang, setBarang] = useState<BarangLayanan[]>([]);
  const [estimasi, setEstimasi] = useState<string>();
  const [pembayaran, setPembayaran] = useState<string>();
  const [pengiriman, setPengiriman] = useState<number>(0);
  const [diskon, setDiskon] = useState<string>();

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
            <TouchableOpacity onLongPress={() => setPelanggan(undefined)}>
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
              onSave={(pembayaran) => {
                setEstimasi(pembayaran.tanggal);
                setPembayaran(pembayaran.metode);
                setPengiriman(pembayaran.pengiriman);
                setDiskon(pembayaran.diskon);
              }}
            />
          </Wrapper>
          <Card
            footer={
              <Wrapper flexDirection="row" justifyContent="space-between">
                <Text variant="label">Total bayar</Text>
                <Text variant="subtitle">
                  {formatRupiah(
                    pengiriman +
                      barang
                        .flatMap((item) => item.layanan.price)
                        .reduce((acc, curr) => acc + curr, 0),
                  )}
                </Text>
              </Wrapper>
            }
          >
            <Wrapper>
              <Wrapper flexDirection="row" justifyContent="space-between">
                <Text variant="label">Estimasi selesai</Text>
                <Text>{estimasi}</Text>
              </Wrapper>
              <Wrapper flexDirection="row" justifyContent="space-between">
                <Text variant="label">Metode bayar</Text>
                <Text>{pembayaran}</Text>
              </Wrapper>
              <Wrapper flexDirection="row" justifyContent="space-between">
                <Text variant="label">Diskon</Text>
                <Text>{diskon}</Text>
              </Wrapper>
              <Wrapper flexDirection="row" justifyContent="space-between">
                <Text variant="label">Biaya pengiriman</Text>
                <Text>{formatRupiah(pengiriman)}</Text>
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

        <Wrapper
          gap={10}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            icon="x"
            color="neutral"
            onPress={() => {
              setPelanggan(undefined);
              setBarang([]);
              setEstimasi("");
              setPembayaran("");
              setPengiriman(0);
              setDiskon("");
            }}
          />
          <PreviewInvoice style={{ flex: 1 }} />
        </Wrapper>
      </Wrapper>
    </ScrollView>
  );
};

export default OrderScreen;
