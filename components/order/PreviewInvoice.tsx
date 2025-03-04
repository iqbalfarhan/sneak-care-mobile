import { useCreateOrder } from "@/hooks/invoice/useOrder";
import { createOrderPayload } from "@/utils/apis/apiOrder";
import { router } from "expo-router";
import React, { FC, useState } from "react";
import { ViewStyle } from "react-native";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import Text from "../Text";
import Wrapper from "../Wrapper";

type PreviewInvoiceProps = {
  style?: ViewStyle;
  payload: createOrderPayload;
  onSuccess?: () => void;
};

const PreviewInvoice: FC<PreviewInvoiceProps> = ({
  style,
  payload,
  onSuccess,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const { mutateAsync, isPending, error } = useCreateOrder();

  return (
    <>
      <Button
        label="Proses pesanan"
        icon="check"
        style={style}
        onPress={() => setShow(true)}
      />
      <BottomSheet
        visible={show}
        title="Preview invoice"
        onRequestClose={() => setShow(false)}
      >
        <Wrapper>
          <Text>{JSON.stringify(payload, null, 2)}</Text>
          {error && <ErrorMessage message={error.message} />}
        </Wrapper>
        <Button
          label="Lanjut proses pesanan"
          icon="check"
          disabled={isPending}
          onPress={() => {
            mutateAsync(payload).then((data) => {
              setShow(false);
              onSuccess?.();
              router.push({
                pathname: "/invoice/[id]",
                params: { id: data.id },
              });
            });
          }}
        />
      </BottomSheet>
    </>
  );
};

export default PreviewInvoice;
