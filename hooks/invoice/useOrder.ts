import apiOrder from "@/utils/apis/apiOrder";
import { Order } from "@/utils/types/order";
import { useQuery } from "@tanstack/react-query";

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
