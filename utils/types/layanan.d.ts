export type Layanan = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type BarangLayanan = {
  id: number;
  name: string;
  layanan: Layanan;
};
