import { ThemeColors } from "@/hooks/useColor";
import { OrderStatus } from "../types/order";

export const generateAvatarLink = (fallback?: string | number, size = 50) => {
  const random = Math.floor(Math.random() * 1000);
  return `https://api.dicebear.com/9.x/dylan/png?seed=${fallback ?? random}&size=${size}`;
};

export const statusDescription = (
  status: OrderStatus,
): {
  message: string;
  color: keyof ThemeColors;
} => {
  switch (status) {
    case "draft":
      return {
        message:
          "Belum diproses masih menunggu terknisi untuk pickup barang ini",
        color: "warning",
      };
    case "progress":
      return {
        message:
          "Sedang diproses teknisi, akan selesai sesuai tanggal estimasi.",
        color: "primary",
      };
    case "done":
      return {
        message:
          "Barang sudah selesai diproses dan siap diambil oleh pelanggan.",
        color: "accent",
      };
    case "complete":
      return {
        message:
          "Selesai, order ini sudah selesai dan sudah diambil oleh pelanggan.",
        color: "success",
      };
    case "canceled":
      return {
        message: "Pesanan dibatalkan, dan tidak dilanjutkan lagi.",
        color: "error",
      };
    default:
      return {
        message: "Status yang tidak diketahui",
        color: "card",
      };
  }
};

export function sliceText(str: string, count: number = 3): string {
  return str.slice(0, count);
}

export function getRandomValue(arr: string[]): string {
  if (arr.length === 0) {
    throw new Error("Array tidak boleh kosong");
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export const formatDate = (date: Date): string => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
