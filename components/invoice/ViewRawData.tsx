import { Order } from "@/utils/types/order";
import React, { FC, useState } from "react";
import { ScrollView } from "react-native";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import Text from "../Text";

type ViewRawDataProps = {
  invoice: Order;
};

const ViewRawData: FC<ViewRawDataProps> = ({ invoice }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <Button
        label="Tampilkan data mentah"
        icon="codescan"
        color="card"
        align="flex-start"
        onPress={() => setShow(true)}
      />
      <BottomSheet
        title="Raw data invoice"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>{JSON.stringify(invoice, null, 4)}</Text>
        </ScrollView>
      </BottomSheet>
    </>
  );
};

export default ViewRawData;
