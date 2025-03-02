import { useColor } from "@/hooks/useColor";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import React, { useState } from "react";
import { ToastAndroid } from "react-native";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import IconButton from "../IconButton";
import Loading from "../Loading";
import Text from "../Text";

const ScanInvoiceQr = () => {
  const { color } = useColor();
  const [show, setShow] = useState<boolean>(false);

  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <>
      <IconButton
        icon="screen-full"
        color="input"
        onPress={() => {
          setShow(true);
          ToastAndroid.show("Arahkan kamera ke QR", ToastAndroid.SHORT);
        }}
      />

      <BottomSheet
        title="Scan Invoice"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        {!permission && <Loading />}
        {!permission?.granted ? (
          <>
            <Text>
              Aplikasi ini membutuhkan ijin anda untuk menggunakan kamera.
            </Text>
            <Button
              onPress={requestPermission}
              icon="check"
              label="Berikan akses ke kamera"
            />
          </>
        ) : (
          <>
            <CameraView
              facing={facing}
              style={{ width: "100%", height: 400, borderRadius: 10 }}
              onBarcodeScanned={({ data }) => {
                setShow(false);
                ToastAndroid.show(data, ToastAndroid.SHORT);
                router.push({
                  pathname: "/invoice/[id]",
                  params: { id: data },
                });
              }}
            />

            <Button
              icon="mirror"
              color="neutral"
              label="Balik kamera"
              onPress={toggleCameraFacing}
            />

            <Text align="center">
              Arahkan kamera ke kode QR invoice. aplikasi otomatis akan
              mengarahkan ke halaman detail invoice
            </Text>
          </>
        )}
      </BottomSheet>
    </>
  );
};

export default ScanInvoiceQr;
