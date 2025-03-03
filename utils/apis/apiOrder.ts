import api from ".";
import { Diskon } from "../types/diskon";
import { Layanan } from "../types/layanan";
import { Order, OrderStatus } from "../types/order";
import { Pelanggan } from "../types/pelanggan";
import { Pembayaran } from "../types/pembayaran";
import { User } from "../types/user";

export type createOrderPayload = {
  payment_id?: Pembayaran["id"];
  discount_id?: Diskon["id"];
  customer_id: Pelanggan["id"];
  estimate_date: string;
  shipping_cost?: Order["shipping_cost"];
  total_pay?: number;
  barang: {
    name: string;
    service_id: Layanan["id"];
  }[];
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
  updateOrderStatus: async (id: Order["id"], status: OrderStatus) => {
    return await api.put(`/order/${id}`, { status: status });
  },
  updateOrderTeknisi: async (id: Order["id"], teknisi_id: User["id"]) => {
    return await api.put(`/order/${id}`, { teknisi_id: teknisi_id });
  },
  postOrder: async (payload: createOrderPayload): Promise<Order> => {
    const { data } = await api.post(`/order`, payload);
    return data;
  },
};

export default apiOrder;
