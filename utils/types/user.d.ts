export type UserRole = "owner" | "teknisi" | "kasir";

export type User = {
  id: number;
  name: string;
  email: string;
  password?: string;
  role: UserRole;
  photo: string;
};
