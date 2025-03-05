import { useColor } from "@/hooks/useColor";
import { generateAvatarLink } from "@/utils/helpers/text";
import { User } from "@/utils/types/user";
import React, { FC } from "react";
import { ViewStyle } from "react-native";
import Avatar from "../Avatar";
import Text from "../Text";
import Wrapper from "../Wrapper";

type KaryawanItemProps = {
  karyawan: User;
  wrapperStyle?: ViewStyle;
};

const KaryawanItem: FC<KaryawanItemProps> = ({ karyawan, wrapperStyle }) => {
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
      {...wrapperStyle}
    >
      <Avatar
        size={40}
        fallback="DD"
        src={{
          uri: karyawan.photo ?? generateAvatarLink(karyawan.name),
        }}
      />
      <Wrapper>
        <Text variant="menutitle">{karyawan.name}</Text>
        <Text variant="label">{karyawan.role}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default KaryawanItem;
