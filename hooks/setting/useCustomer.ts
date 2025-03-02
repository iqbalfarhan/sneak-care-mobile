import apiPelanggan from "@/utils/apis/apiPelanggan";
import { Pelanggan } from "@/utils/types/pelanggan";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetCustomers = () => {
  return useQuery({
    queryKey: ["customers"],
    queryFn: async () => apiPelanggan.getCustomers(),
  });
};

export const useCreateCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: Omit<Pelanggan, "id">) =>
      apiPelanggan.postCustomer(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });
};

export const useEditCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: Pelanggan) => apiPelanggan.putCustomer(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });
};

export const useDeleteCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: Pelanggan["id"]) => apiPelanggan.deleteCustomer(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });
};
