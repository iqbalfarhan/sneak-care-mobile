import { useGetMe } from "@/hooks/authentication/useGetMe";
import { generateAvatarLink, getGreeting } from "@/utils/helpers/text";
import React from "react";
import Avatar from "../Avatar";
import Text from "../Text";
import Wrapper from "../Wrapper";

const SmallUserInfo = () => {
  const { data } = useGetMe();

  return (
    <Wrapper
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      flex={0}
    >
      <Wrapper gap={0}>
        <Text variant="menutitle">Hallo, {data?.name ?? ""}</Text>
        <Text variant="label">{getGreeting()}</Text>
      </Wrapper>
      <Avatar
        fallback="IF"
        src={{
          uri: data?.photo ?? generateAvatarLink(data?.name ?? "default"),
        }}
      />
    </Wrapper>
  );
};

export default SmallUserInfo;
