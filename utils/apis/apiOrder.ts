import api from ".";
import { Diskon } from "../types/diskon";
import { Layanan } from "../types/layanan";
import { Order, OrderStatus } from "../types/order";
import { Pelanggan } from "../types/pelanggan";
import { Pembayaran } from "../types/pembayaran";
import { User } from "../types/user";

export type createOrderPayload = {
  payment_id: Pembayaran["id"] | null;
  discount_id: Diskon["id"] | null;
  customer_id: Pelanggan["id"] | null;
  estimate_date: string | null;
  shipping_cost: Order["shipping_cost"] | null;
  total_pay?: number;
  barang: {
    name: string;
    service_id: Layanan["id"];
  }[];
  paid: Order["paid"];
};

export type EditOrderPayload = {
  id: Order["id"];
  teknisi_id?: User["id"];
  paid?: Order["paid"];
  status?: OrderStatus;
};

const apiOrder = {
  getOrders: async (): Promise<Order[]> => {
    const { data } = await api.get(`/order`);
    return data;
  },
  getOrderById: async (id: Order["id"]): Promise<Order> => {
    const { data } = await api.get(`/order/${id}`);
    return data;
  },
  putOrder: async (payload: EditOrderPayload): Promise<Order> => {
    const { id, ...other } = payload;
    const { data } = await api.put(`/order/${id}`, other);
    return data;
  },
  postOrder: async (payload: createOrderPayload): Promise<Order> => {
    const { data } = await api.post(`/order`, payload);
    return data;
  },
};

export default apiOrder;
