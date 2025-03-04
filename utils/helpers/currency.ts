import { Diskon } from "../types/diskon";
import { BarangLayanan } from "../types/layanan";

export function formatRupiah(angka: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Bisa diubah sesuai kebutuhan
  }).format(angka);
}

export const generateBiayaLayanan = (barang: BarangLayanan[]): number => {
  return barang
    .flatMap((item) => item.layanan.price)
    .reduce((acc, curr) => Number(acc) + Number(curr), 0);
};

export const generateTotalPay = (
  barang: BarangLayanan[],
  diskon: Diskon | null,
  pengiriman: number,
): number => {
  const bayarBarang = generateBiayaLayanan(barang);
  let bayarDiskon = 0;
  if (diskon) {
    if (diskon.type === "percent") {
      bayarDiskon = (diskon.value / 100) * bayarBarang;
    } else if (diskon.type === "amount") {
      bayarDiskon = diskon.value;
    }
  }
  return bayarBarang - bayarDiskon + pengiriman;
};
