import { useColor } from "@/hooks/useColor";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Text from "./Text";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSLATE_Y = SCREEN_HEIGHT / 1.5;
const MIN_TRANSLATE_Y = SCREEN_HEIGHT / 5;

const BottomDrawer = () => {
  const { color } = useColor();
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart((e) => {
      context.value = { y: translateY.value };
    })
    .onUpdate((e) => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -MAX_TRANSLATE_Y);
    })
    .onEnd((e) => {
      if (translateY.value > -MIN_TRANSLATE_Y) {
        translateY.value = withSpring(SCREEN_HEIGHT);
      }
      if (translateY.value < -MIN_TRANSLATE_Y) {
        translateY.value = withSpring(-MAX_TRANSLATE_Y);
      }
    });

  const reanimatedBottomStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const scrollTo = (destination: number) => {
    "worklet";
    translateY.value = withSpring(destination, { damping: 50 });
  };

  useEffect(() => {
    scrollTo(-SCREEN_HEIGHT / 3);
  }, []);

  const styles = StyleSheet.create({
    bottomsheet_container: {
      width: "100%",
      height: SCREEN_HEIGHT,
      backgroundColor: color.base.bg,
      position: "absolute",
      top: SCREEN_HEIGHT / 1.5,
      zIndex: 12000,
      borderRadius: 20,
      paddingHorizontal: 10,
    },
    line: {
      width: 50,
      height: 4,
      backgroundColor: "white",
      borderRadius: 20,
      alignSelf: "center",
      marginVertical: 10,
    },
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[styles.bottomsheet_container, reanimatedBottomStyle]}
      >
        <View style={styles.line} />
        <Text>Bottomsheet</Text>
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomDrawer;
