export type Diskon = {
  id: number;
  name: string;
  value: number;
  description: string;
  type: "percent" | "amount";
};
