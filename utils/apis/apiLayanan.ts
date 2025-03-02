import api from ".";
import { Layanan } from "../types/layanan";

const apiLayanan = {
  getLayanan: async () => {
    const { data } = await api.get("/service");
    return data;
  },
  postLayanan: async (payload: Omit<Layanan, "id">) => {
    return await api.post("/service", payload);
  },
  putLayanan: async (payload: Layanan) => {
    const { id, ...rest } = payload;
    return await api.put(`/service/${id}`, rest);
  },
  deleteLayanan: async (id: Layanan["id"]) => {
    return await api.delete(`/service/${id}`);
  },
};

export default apiLayanan;
