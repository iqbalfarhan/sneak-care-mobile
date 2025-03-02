import apiBank from "@/utils/apis/apiBank";
import apiPembayaran from "@/utils/apis/apiPembayaran";
import { Bank } from "@/utils/types/bank";
import { Pembayaran } from "@/utils/types/pembayaran";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetBank = () => {
  return useQuery<Bank[]>({
    queryKey: ["bank"],
    queryFn: () => apiBank.getBanks(),
  });
};

export const useGetPayment = () => {
  return useQuery<Pembayaran[]>({
    queryKey: ["payment"],
    queryFn: () => apiPembayaran.getPembayaran(),
  });
};

export const useDeletePayment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: Pembayaran["id"]) => apiPembayaran.deletePayment(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["payment"] });
    },
  });
};

export const useEditPayment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: Pembayaran) => apiPembayaran.putPayment(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["payment"] });
    },
  });
};

export const useCreatePayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Omit<Pembayaran, "id">) =>
      apiPembayaran.postPayment(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["payment"] });
    },
  });
};
