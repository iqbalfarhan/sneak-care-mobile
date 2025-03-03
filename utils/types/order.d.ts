import { Diskon } from "./diskon";
import { BarangLayanan } from "./layanan";
import { Pelanggan } from "./pelanggan";
import { Pembayaran } from "./pembayaran";
import { User } from "./user";

export type OrderStatus =
  | "draft"
  | "progress"
  | "done"
  | "complete"
  | "cancelled";

export type Order = {
  id: number;
  invoice_no: string;
  barang: BarangLayanan[];
  estimate_date: Date;
  shipping_cost: number;
  status: OrderStatus;
  teknisi?: User;
  kasir: User;
  pelanggan: Pelanggan;
  diskon?: Diskon;
  payment: Pembayaran;
  paid: boolean;
  total_pay?: number;
};
