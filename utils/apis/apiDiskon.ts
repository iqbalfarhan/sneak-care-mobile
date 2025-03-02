import api from ".";
import { Diskon } from "../types/diskon";

export type DiskonPayload = Omit<Diskon, "id">;

const apiDiskon = {
  getDiscount: async (): Promise<Diskon[]> => {
    const { data } = await api.get("/discount");
    return data;
  },
  postDiscount: async (payload: DiskonPayload): Promise<Diskon> => {
    const { data } = await api.post("/discount", payload);
    return data;
  },
  putDiscount: async (diskon: Diskon) => {
    const { id, ...rest } = diskon;
    const { data } = await api.put(`/discount/${id}`, rest);
    return data;
  },
  deleteDiscount: async (id: Diskon["id"]): Promise<void> => {
    await api.delete(`/discount/${id}`);
  },
};

export default apiDiskon;
