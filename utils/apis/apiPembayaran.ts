import api from ".";
import { Pembayaran } from "../types/pembayaran";

const apiPembayaran = {
  getPembayaran: async (): Promise<Pembayaran[]> => {
    const { data } = await api.get("/payment");
    return data;
  },
  postPayment: async (payload: Omit<Pembayaran, "id">) => {
    const { data } = await api.post("/payment", payload);
    return data;
  },
  putPayment: async (payload: Pembayaran) => {
    const { data } = await api.put(`/payment/${payload.id}`, payload);
    return data;
  },
  deletePayment: async (id: Pembayaran["id"]) => {
    await api.delete(`/payment/${id}`);
  },
};
export default apiPembayaran;
