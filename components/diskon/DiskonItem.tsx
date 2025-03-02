import { formatRupiah } from "@/utils/helpers/currency";
import { Diskon } from "@/utils/types/diskon";
import React, { FC } from "react";
import Card from "../Card";
import Text from "../Text";
import Wrapper from "../Wrapper";

type DiskonItemProps = {
  diskon: Diskon;
};

const DiskonItem: FC<DiskonItemProps> = ({ diskon }) => {
  return (
    <Card>
      <Wrapper
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={10}
      >
        <Wrapper flex={1}>
          <Text variant="menutitle">{diskon.name}</Text>
        </Wrapper>
        <Wrapper flex={0}>
          <Text variant="label">
            {diskon?.type == "amount"
              ? formatRupiah(diskon.value)
              : `${diskon.value}%`}
          </Text>
        </Wrapper>
      </Wrapper>
      <Text variant="label" style={{ opacity: 0.5 }} numberOfLines={2}>
        {diskon.description}
      </Text>
    </Card>
  );
};

export default DiskonItem;
