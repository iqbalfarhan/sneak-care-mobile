import apiKaryawan from "@/utils/apis/apiKaryawan";
import { User } from "@/utils/types/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetKaryawan = () => {
  return useQuery({
    queryKey: ["karyawan"],
    queryFn: async () => apiKaryawan.getKaryawan(),
  });
};

export const useCreateKaryawan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: User) => {
      await apiKaryawan.postKaryawan(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["karyawan"] });
    },
  });
};

export const useEditKaryawan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: User) => {
      await apiKaryawan.putKaryawan(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["karyawan"] });
    },
  });
};
