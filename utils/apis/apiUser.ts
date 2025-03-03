import api from ".";
import { User } from "../types/user";

export type LoginPayload = Pick<User, "email" | "password">;
export type RegisterPayload = Pick<User, "name" | "email" | "password"> & {
  password_confirmation: string;
};

const apiUser = {
  login: async (payload: LoginPayload) => {
    const { data } = await api.post("/login", payload);
    const token = data.token;
    return token;
  },
  register: async (payload: RegisterPayload) => {
    const { data } = await api.post("/register", payload);
    const token = data.token;
    return token;
  },
  getMe: async () => {
    const { data } = await api.get("/user");
    return data;
  },
  getToko: async () => {
    const { data } = await api.get("/shop");
    return data;
  },
};

export default apiUser;
