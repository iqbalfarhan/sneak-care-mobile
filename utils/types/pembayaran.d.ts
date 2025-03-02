import { Bank } from "./bank";

export type Pembayaran = {
  id: number;
  name: string;
  account_number: string;
  bank_id: number;
  bank?: Bank;
};
