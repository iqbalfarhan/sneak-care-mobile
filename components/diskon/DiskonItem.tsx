import { ThemeColors, useColor } from "@/hooks/useColor";
import { formatRupiah } from "@/utils/helpers/currency";
import { Diskon } from "@/utils/types/diskon";
import React, { FC } from "react";
import Card from "../Card";
import Text from "../Text";
import Wrapper from "../Wrapper";

type DiskonItemProps = {
  diskon: Diskon;
  color?: keyof ThemeColors;
};

const DiskonItem: FC<DiskonItemProps> = ({ diskon, color = "card" }) => {
  const { color: theme } = useColor();
  const { content } = theme[color];
  return (
    <Card color={color}>
      <Wrapper
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={10}
      >
        <Wrapper flex={1}>
          <Text color={content} variant="menutitle">
            {diskon.name}
          </Text>
        </Wrapper>
        <Wrapper flex={0}>
          <Text color={content} variant="label">
            {diskon?.type == "amount"
              ? formatRupiah(diskon.value)
              : `${diskon.value}%`}
          </Text>
        </Wrapper>
      </Wrapper>
      <Text
        color={content}
        variant="label"
        style={{ opacity: 0.5 }}
        numberOfLines={2}
      >
        {diskon.description}
      </Text>
    </Card>
  );
};

export default DiskonItem;
