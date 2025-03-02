import apiLayanan from "@/utils/apis/apiLayanan";
import { Layanan } from "@/utils/types/layanan";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetService = () => {
  return useQuery<Layanan[]>({
    queryKey: ["service"],
    queryFn: () => apiLayanan.getLayanan(),
  });
};

export const useCreateService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Omit<Layanan, "id">) =>
      apiLayanan.postLayanan(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["service"] });
    },
  });
};

export const useEditService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (layanan: Layanan) => apiLayanan.putLayanan(layanan),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["service"] });
    },
  });
};

export const useDeleteService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: Layanan["id"]) => apiLayanan.deleteLayanan(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["service"] });
    },
  });
};
