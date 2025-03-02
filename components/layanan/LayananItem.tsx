import { useColor } from "@/hooks/useColor";
import { formatRupiah } from "@/utils/helpers/currency";
import { Layanan } from "@/utils/types/layanan";
import React, { FC } from "react";
import Card from "../Card";
import Text from "../Text";
import Wrapper from "../Wrapper";

type LayananItemProps = {
  layanan: Layanan;
};

const LayananItem: FC<LayananItemProps> = ({ layanan }) => {
  const { color } = useColor();
  return (
    <Card
      header={
        <Wrapper flexDirection="row" justifyContent="space-between">
          <Text variant="menutitle">{layanan.name}</Text>
          <Text variant="label" color={color.primary.bg}>
            {formatRupiah(layanan.price)}
          </Text>
        </Wrapper>
      }
    >
      <Text variant="label">{layanan.description}</Text>
    </Card>
  );
};

export default LayananItem;
