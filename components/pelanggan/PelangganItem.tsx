import { useColor } from "@/hooks/useColor";
import { generateAvatarLink } from "@/utils/helpers/text";
import { Pelanggan } from "@/utils/types/pelanggan";
import React, { FC } from "react";
import Avatar from "../Avatar";
import Text from "../Text";
import Wrapper from "../Wrapper";

type PelangganItemProps = {
  pelanggan: Pelanggan;
};

const PelangganItem: FC<PelangganItemProps> = ({ pelanggan }) => {
  const { color } = useColor();
  return (
    <Wrapper
      flexDirection="row"
      gap={15}
      alignItems="center"
      backgroundColor={color.card.bg}
      padding={20}
      paddingVertical={15}
      borderRadius={10}
    >
      <Avatar
        size={40}
        fallback="DD"
        src={{
          uri: generateAvatarLink(pelanggan.name),
        }}
      />
      <Wrapper flex={1}>
        <Text variant="menutitle" numberOfLines={1}>
          {pelanggan.name}
        </Text>
        <Text variant="label">{pelanggan.phone}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default PelangganItem;
