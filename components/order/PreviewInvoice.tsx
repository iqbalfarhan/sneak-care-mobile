import { router } from "expo-router";
import React, { FC, useState } from "react";
import { ViewStyle } from "react-native";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import Text from "../Text";
import Wrapper from "../Wrapper";

type PreviewInvoiceProps = {
  style?: ViewStyle;
};

const PreviewInvoice: FC<PreviewInvoiceProps> = ({ style }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <Button
        label="Proses pesanan"
        icon="check"
        disabled
        style={style}
        onPress={() => setShow(true)}
      />
      <BottomSheet
        visible={show}
        title="Preview invoice"
        onRequestClose={() => setShow(false)}
      >
        <Wrapper>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            saepe rem. Aut numquam veritatis, id dolorem nihil incidunt animi
            provident cum, tempore adipisci cupiditate possimus. Ipsam repellat
            vero quos iusto!
          </Text>
        </Wrapper>
        <Button
          label="Lanjut proses pesanan"
          icon="check"
          onPress={() =>
            router.push({
              pathname: "/invoice/[id]",
              params: { id: "1" },
            })
          }
        />
      </BottomSheet>
    </>
  );
};

export default PreviewInvoice;
