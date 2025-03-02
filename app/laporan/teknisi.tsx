import KaryawanItem from "@/components/karyawan/KaryawanItem";
import MonthPicker from "@/components/MonthPicker";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import { useColor } from "@/hooks/useColor";
import apiKaryawan from "@/utils/apis/apiKaryawan";
import React, { useState } from "react";
import { Pressable } from "react-native";

const LaporanTeknisi = () => {
  const data = apiKaryawan.getKaryawan();
  const { color } = useColor();
  return (
    <Wrapper padding={20} gap={20}>
      <MonthPicker value="Februari 2025" onChange={() => {}} />
      <Wrapper gap={5}>
        {data
          .filter((item) => item.role === "teknisi")
          .map((item) => {
            const [show, setShow] = useState<boolean>(false);
            return (
              <Wrapper
                key={item.id}
                backgroundColor={color.input.bg}
                borderRadius={10}
              >
                <Pressable onPress={() => setShow(!show)}>
                  <KaryawanItem karyawan={item} />
                </Pressable>

                {show && (
                  <Wrapper padding={20}>
                    <Wrapper flexDirection="row" justifyContent="space-between">
                      <Text>Layanan bersih2</Text>
                      <Text>123</Text>
                    </Wrapper>
                    <Wrapper flexDirection="row" justifyContent="space-between">
                      <Text>Layanan bersih2</Text>
                      <Text>123</Text>
                    </Wrapper>
                  </Wrapper>
                )}
              </Wrapper>
            );
          })}
      </Wrapper>
    </Wrapper>
  );
};

export default LaporanTeknisi;
