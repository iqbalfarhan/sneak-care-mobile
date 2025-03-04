import apiOrder, {
  createOrderPayload,
  EditOrderPayload,
} from "@/utils/apis/apiOrder";
import { Order } from "@/utils/types/order";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetOrders = () => {
  return useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: async () => apiOrder.getOrders(),
  });
};

export const useShowOrder = (id: Order["id"]) => {
  return useQuery<Order>({
    queryKey: ["orders", id],
    queryFn: async () => apiOrder.getOrderById(id),
  });
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: createOrderPayload) =>
      await apiOrder.postOrder(payload),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};

export const useEditOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: EditOrderPayload) =>
      await apiOrder.putOrder(payload),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: Order["id"]) => await apiOrder.deleteOrder(id),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};
