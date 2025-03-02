import api from ".";
import { Pelanggan } from "../types/pelanggan";

const data: Pelanggan[] = [
  {
    id: 1,
    name: "John Doe",
    phone: "081234567890",
  },
  {
    id: 2,
    name: "Jane Doe",
    phone: "081234567890",
  },
  {
    id: 3,
    name: "Jane Fredrick",
    phone: "081234567890",
  },
  {
    id: 4,
    name: "Jane Smith",
    phone: "081234567890",
  },
  {
    id: 5,
    name: "Ronald Trump",
    phone: "081234567890",
  },
  {
    id: 6,
    name: "Exhausted Rabbit",
    phone: "081234567890",
  },
  {
    id: 7,
    name: "Nobody Franklin",
    phone: "081234567890",
  },
  {
    id: 8,
    name: "The Internet",
    phone: "081234567890",
  },
  {
    id: 9,
    name: "The Moon",
    phone: "081234567890",
  },
  {
    id: 10,
    name: "The Sun",
    phone: "081234567890",
  },
];

const apiPelanggan = {
  getCustomers: async (): Promise<Pelanggan[]> => {
    const { data } = await api.get("/customer");
    return data;
  },
  findCustomer: (id: Pelanggan["id"]) => {
    return data.find((pelanggan) => pelanggan.id === id) ?? null;
  },
  deleteCustomer: async (id: Pelanggan["id"]) => {
    await api.delete(`/customer/${id}`);
  },
  postCustomer: async (payload: Omit<Pelanggan, "id">) => {
    await api.post(`/customer`, payload);
  },
  putCustomer: async (payload: Pelanggan) => {
    const { id, ...other } = payload;
    await api.put(`/customer/${id}`, other);
  },
};

export default apiPelanggan;
