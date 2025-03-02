import apiUser from "@/utils/apis/apiUser";
import { Toko } from "@/utils/types/toko";
import { User } from "@/utils/types/user";
import { useQuery } from "@tanstack/react-query";

export const useGetMe = () => {
  return useQuery<User>({
    queryKey: ["profile"],
    queryFn: async () => apiUser.getMe(),
  });
};

export const useGetToko = () => {
  return useQuery<Toko>({
    queryKey: ["toko"],
    queryFn: async () => apiUser.getToko(),
  });
};
