import { useColor } from "@/hooks/useColor";
import React, { FC } from "react";
import { Image, ImageSourcePropType } from "react-native";
import Text from "./Text";
import Wrapper from "./Wrapper";

type AvatarProps = {
  size?: number;
  fallback: string;
  src?: ImageSourcePropType;
};

const Avatar: FC<AvatarProps> = ({ size = 48, fallback, src }) => {
  const { color } = useColor();
  return (
    <Wrapper
      borderRadius={size / 2}
      backgroundColor={color.card.bg}
      width={size}
      height={size}
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      {src ? (
        <Image source={src} style={{ width: size, height: size }} />
      ) : (
        <Text>{fallback}</Text>
      )}
    </Wrapper>
  );
};

export default Avatar;
