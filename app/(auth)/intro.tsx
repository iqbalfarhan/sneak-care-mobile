import IconButton from "@/components/IconButton";
import Payment from "@/components/illustrations/Payment";
import Programmer from "@/components/illustrations/Programmer";
import Revenue from "@/components/illustrations/Revenue";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import { useColor } from "@/hooks/useColor";
import useIntro from "@/hooks/useIntro";
import { Octicons } from "@expo/vector-icons";
import { Redirect, router } from "expo-router";
import React, { useState } from "react";
import { Animated, SafeAreaView, TouchableOpacity } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const introContent = [
  {
    id: 1,
    title: "Sistem Kasir yang Mudah Digunakan",
    description:
      "Kelola transaksi dengan cepat dan efisien menggunakan sistem kasir yang dirancang untuk kemudahan pengguna.",
  },
  {
    id: 2,
    title: "Laporan Keuangan Otomatis",
    description:
      "Dapatkan laporan keuangan harian, mingguan, dan bulanan secara otomatis untuk memantau perkembangan bisnis Anda.",
  },
  {
    id: 3,
    title: "Multi Metode Pembayaran",
    description:
      "Dukung berbagai metode pembayaran, mulai dari tunai, transfer bank, hingga dompet digital untuk kemudahan transaksi pelanggan.",
  },
];

const IntroScreen = () => {
  const { color } = useColor();
  const [active, setActive] = useState<number>(0);
  const content = introContent[active];
  const { intro } = useIntro();

  if (intro === "true") {
    return <Redirect href="/(auth)/login" />;
  }

  const handleNext = () => {
    if (active < introContent.length - 1) {
      setActive(active + 1);
    } else {
      router.push("/login");
    }
  };

  const handlePrevious = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  const onSwipe = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX < -50 && active < introContent.length - 1) {
        handleNext();
      } else if (nativeEvent.translationX > 50 && active > 0) {
        handlePrevious();
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Wrapper flex={1} paddingTop={60}>
        <PanGestureHandler onHandlerStateChange={onSwipe}>
          <Animated.View style={{ flex: 1, padding: 40 }}>
            <Wrapper flex={1} justifyContent="space-around" alignItems="center">
              {active === 0 && <Programmer size={300} />}
              {active === 1 && <Revenue size={300} />}
              {active === 2 && <Payment size={300} />}
              <Wrapper gap={10}>
                <Text variant="title" align="center">
                  {content.title}
                </Text>
                <Text align="center">{content.description}</Text>
              </Wrapper>
              <Wrapper
                paddingVertical={20}
                flexDirection="row"
                alignItems="center"
                gap={5}
                justifyContent="center"
              >
                {introContent.map((_, index) => (
                  <Wrapper
                    key={index}
                    height={12}
                    aspectRatio={1}
                    borderRadius={10}
                    backgroundColor={
                      color.primary[active === index ? "bg" : "content"]
                    }
                  />
                ))}
              </Wrapper>
            </Wrapper>
          </Animated.View>
        </PanGestureHandler>

        <Wrapper
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          padding={40}
          flex={0}
        >
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Wrapper
              flexDirection="row"
              gap={10}
              alignItems="center"
              justifyContent="center"
              opacity={0.5}
            >
              <Text>Lanjut</Text>
              <Octicons
                name="arrow-right"
                size={16}
                color={color.base.content}
              />
            </Wrapper>
          </TouchableOpacity>
          <Wrapper flexDirection="row" gap={5}>
            <IconButton
              circle
              icon="chevron-left"
              color="input"
              onPress={handlePrevious}
            />
            <IconButton
              circle
              icon="chevron-right"
              color="input"
              onPress={handleNext}
            />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </SafeAreaView>
  );
};

export default IntroScreen;
