import { useGetService } from "@/hooks/setting/useService";
import { useColor } from "@/hooks/useColor";
import { User } from "@/utils/types/user";
import React, { FC, useState } from "react";
import { Pressable } from "react-native";
import IconButton from "../IconButton";
import Text from "../Text";
import Wrapper from "../Wrapper";
import KaryawanItem from "../karyawan/KaryawanItem";

type DropdownTeknisiProps = {
  karyawan: User;
};

const DropdownTeknisi: FC<DropdownTeknisiProps> = ({ karyawan }) => {
  const { color } = useColor();
  const [show, setShow] = useState(false);
  const { data: services } = useGetService();
  return (
    <Wrapper backgroundColor={color.card.bg} borderRadius={10}>
      <Pressable onPress={() => setShow(!show)}>
        <Wrapper
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          paddingRight={20}
        >
          <KaryawanItem karyawan={karyawan} wrapperStyle={{ flex: 1 }} />
          <IconButton
            icon="chevron-down"
            size="small"
            color="input"
            disabled
            onPress={() => setShow(!show)}
          />
        </Wrapper>
      </Pressable>
      {show && (
        <Wrapper padding={20} paddingTop={0}>
          {services?.map((item) => (
            <Wrapper
              key={item.id}
              flexDirection="row"
              justifyContent="space-between"
            >
              <Text variant="label">{item.name}</Text>
              <Text variant="label">123</Text>
            </Wrapper>
          ))}
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default DropdownTeknisi;
