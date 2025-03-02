import { ThemeColors, useColor } from "@/hooks/useColor";
import { formatRupiah } from "@/utils/helpers/currency";
import { Paket } from "@/utils/types/paket";
import { Octicons } from "@expo/vector-icons";
import React, { FC } from "react";
import Button from "../Button";
import Card from "../Card";
import Text from "../Text";
import Wrapper from "../Wrapper";

type PaketCardProps = {
  paket: Paket;
  buttonColor?: keyof ThemeColors;
};

const PaketCard: FC<PaketCardProps> = ({ paket, buttonColor = "primary" }) => {
  const { color } = useColor();
  return (
    <Card
      header={
        <Wrapper flexDirection="row" justifyContent="space-between">
          <Text variant="subtitle">{paket.name}</Text>
          <Text color={color.primary.bg}>{formatRupiah(paket.price)}</Text>
        </Wrapper>
      }
      footer={
        <Button
          label={"Pilih paket ini"}
          icon="arrow-right"
          color={buttonColor}
        />
      }
    >
      <Text variant={"label"}>{paket.description}</Text>
      <Wrapper gap={5}>
        {paket.features.map((feature, index) => (
          <Wrapper key={index} flexDirection="row" gap={10} alignItems="center">
            <Octicons name="check" size={12} color={color.success.bg} />
            <Text variant={"label"}>{feature}</Text>
          </Wrapper>
        ))}
      </Wrapper>
    </Card>
  );
};

export default PaketCard;
