import axios from "axios";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("session");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
