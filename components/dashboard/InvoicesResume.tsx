import { useGetOrders } from "@/hooks/invoice/useOrder";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import Wrapper from "../Wrapper";
import InvoiceItem from "../invoice/InvoiceItem";

const InvoicesResume = () => {
  const { data } = useGetOrders();
  return (
    <Wrapper gap={5}>
      {data
        ?.filter((order) => order.status === "draft")
        .map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              router.push({
                pathname: "/invoice/[id]",
                params: { id: item.id },
              })
            }
          >
            <InvoiceItem invoice={item} />
          </TouchableOpacity>
        ))}
    </Wrapper>
  );
};

export default InvoicesResume;
