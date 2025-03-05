import { ThemeColors } from "@/hooks/useColor";
import { Order, OrderStatus } from "../types/order";

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
    case "cancelled":
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

export const getGreeting = (): string => {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 5 && hours < 12) {
    return "Selamat pagi!";
  } else if (hours >= 12 && hours < 15) {
    return "Selamat siang!";
  } else if (hours >= 15 && hours < 18) {
    return "Selamat sore!";
  } else {
    return "Selamat malam!";
  }
};

export const formatPhoneNumber = (phone: string): string => {
  // Hapus semua spasi dan karakter non-digit
  let cleaned = phone.replace(/\D/g, "");

  // Jika diawali dengan "0", ganti dengan "+62"
  if (cleaned.startsWith("0")) {
    cleaned = "+62" + cleaned.slice(1);
  } else if (cleaned.startsWith("62")) {
    cleaned = "+62" + cleaned.slice(2);
  } else if (!cleaned.startsWith("+62")) {
    cleaned = "+62" + cleaned;
  }

  return cleaned;
};

export const generateWhatsappMessage = (invoice: Order): string => {
  const phoneNumber = formatPhoneNumber(invoice.pelanggan.phone);
  const webLink = `${process.env.EXPO_PUBLIC_WEB_URL}/invoice/${invoice.id}`;
  const message = `Halo, ${getGreeting()} ${invoice.pelanggan.name}.\n\nini adalah link invoice pembayaran jasa cuci sepatu kamu. disini kamu juga bisa ngecek status pengerjaan sepatu kamu.\n\n${webLink}\n\nnanti masuking kode ${invoice.invoice_no.replace(/\D/g, "")} ke kolom kode saat masuk ke halaman itu untuk verifikasi.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return url;
};
