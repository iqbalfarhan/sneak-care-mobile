import { useGetMe } from "@/hooks/authentication/useGetMe";
import { generateAvatarLink } from "@/utils/helpers/text";
import React from "react";
import Avatar from "../Avatar";
import Text from "../Text";
import Wrapper from "../Wrapper";

const UserCard = () => {
  const { data } = useGetMe();
  return (
    <Wrapper alignItems="center" justifyContent="center" height={250} gap={20}>
      <Avatar
        fallback="IF"
        size={100}
        src={{
          uri: data?.photo ?? generateAvatarLink(data?.email, 100),
        }}
      />
      <Wrapper alignItems="center">
        <Text variant="subtitle">{data?.name ?? ""}</Text>
        <Text variant="label">{data?.email ?? ""}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default UserCard;
