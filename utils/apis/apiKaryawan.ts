import api from ".";
import { User } from "../types/user";

const apiKaryawan = {
  getKaryawan: async (): Promise<User[]> => {
    const { data } = await api.get("/employee");
    return data;
  },
  postKaryawan: async (payload: Omit<User, "id">): Promise<User> => {
    const { data } = await api.post("/employee", payload);
    return data;
  },
  putKaryawan: async (user: User): Promise<User> => {
    const { id, ...other } = user;
    return await api.put(`/employee/${id}`, other);
  },
};

export default apiKaryawan;
