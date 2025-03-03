import api from ".";
import { Order, OrderStatus } from "../types/order";

const apiOrder = {
  getOrders: async (): Promise<Order[]> => {
    const { data } = await api.get(`/order`);
    return data;
  },
  getOrderById: async (id: Order["id"]): Promise<Order> => {
    const { data } = await api.get(`/order/${id}`);
    return data;
  },
  updateOrderStatus: (id: number, status: OrderStatus) => {
    return;
  },
};

export default apiOrder;
