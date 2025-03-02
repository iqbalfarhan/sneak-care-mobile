import apiDiskon, { DiskonPayload } from "@/utils/apis/apiDiskon";
import { Diskon } from "@/utils/types/diskon";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetDiscount = () => {
  return useQuery({
    queryKey: ["diskon"],
    queryFn: async () => await apiDiskon.getDiscount(),
  });
};

export const usePostDiscount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: DiskonPayload) =>
      await apiDiskon.postDiscount(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["diskon"] });
    },
  });
};

export const useEditDiscount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (diskon: Diskon) => await apiDiskon.putDiscount(diskon),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["diskon"] });
    },
  });
};

export const useDeleteDiscount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: Diskon["id"]) => await apiDiskon.deleteDiscount(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["diskon"] });
    },
  });
};
