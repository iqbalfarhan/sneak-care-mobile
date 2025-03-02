import { useColor } from "@/hooks/useColor";
import { formatRupiah } from "@/utils/helpers/currency";
import { BarangLayanan } from "@/utils/types/layanan";
import React, { FC } from "react";
import Card from "../Card";
import Text from "../Text";
import Wrapper from "../Wrapper";

type BarangLayananItemProps = {
  item: BarangLayanan;
};

const BarangLayananItem: FC<BarangLayananItemProps> = ({ item }) => {
  const { color } = useColor();
  return (
    <Card
      header={
        <Wrapper flexDirection="row" justifyContent="space-between">
          <Text variant="menutitle">{item.name}</Text>
          <Text variant="label" color={color.primary.bg}>
            {formatRupiah(item.layanan.price)}
          </Text>
        </Wrapper>
      }
    >
      <Text variant="label">
        {item.layanan.name} : {item.layanan.description}
      </Text>
    </Card>
  );
};

export default BarangLayananItem;
