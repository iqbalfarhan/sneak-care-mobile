import { ThemeColors, useColor } from "@/hooks/useColor";
import { Pembayaran } from "@/utils/types/pembayaran";
import React, { FC } from "react";
import Avatar from "../Avatar";
import Text from "../Text";
import Wrapper from "../Wrapper";

type PembayaranItemProps = {
  pembayaran: Pembayaran;
  color?: keyof ThemeColors;
};

const PembayaranItem: FC<PembayaranItemProps> = ({
  pembayaran,
  color = "card",
}) => {
  const { color: theme } = useColor();
  const { bg, content } = theme[color];
  return (
    <Wrapper
      flexDirection="row"
      gap={15}
      alignItems="center"
      backgroundColor={bg}
      padding={20}
      paddingVertical={15}
      borderRadius={10}
    >
      <Avatar
        size={40}
        fallback="DD"
        src={{
          uri: pembayaran.bank?.logo,
        }}
      />
      <Wrapper flex={1}>
        <Text variant="menutitle" numberOfLines={1} color={content}>
          {pembayaran.name}
        </Text>
        <Text variant="label" color={content}>
          {pembayaran.account_number}
        </Text>
      </Wrapper>
    </Wrapper>
  );
};

export default PembayaranItem;
