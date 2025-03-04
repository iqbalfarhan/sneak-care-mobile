import React, { FC, PropsWithChildren, useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

type SpinningViewProps = PropsWithChildren;

const SpinningView: FC<SpinningViewProps> = ({ children }) => {
  const spin = useSharedValue(0);

  // Mulai animasi saat komponen dipasang
  useEffect(() => {
    spin.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear, // ✅ Menggunakan Easing.linear (worklet)
      }),
      -1,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `-${spin.value}deg` }],
  }));

  return (
    <Animated.View
      style={[
        { alignItems: "center", justifyContent: "center" },
        animatedStyle,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default SpinningView;
