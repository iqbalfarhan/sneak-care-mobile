import { useColor } from "@/hooks/useColor";
import { Octicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import React, { FC } from "react";
import Card from "./Card";
import IconButton from "./IconButton";
import Text from "./Text";
import Wrapper from "./Wrapper";

export type Steps = {
  title: string;
  date: string;
  icon: keyof typeof Octicons.glyphMap;
};

type TimelineProps = {
  steps?: Steps[];
};

const Timeline: FC<TimelineProps> = ({ steps = [] }) => {
  const { color } = useColor();
  return (
    <Card>
      {steps.map((step, index) => (
        <Wrapper key={index} flexDirection="row" gap={10} alignItems="center">
          <IconButton icon={step.icon} size="small" color={"card"} />
          <Wrapper>
            <Text>{step.title}</Text>
            <Text variant="small" style={{ opacity: 0.5 }}>
              {dayjs(step.date).format("DD MMMM YYYY HH:mm:ss")}
            </Text>
          </Wrapper>

          {index !== steps.length - 1 && (
            <Wrapper
              left={18}
              top={35}
              position="absolute"
              height={48}
              borderStyle="dashed"
              borderRightWidth={1}
              borderColor={color.base.content}
              opacity={0.4}
            />
          )}
        </Wrapper>
      ))}
    </Card>
  );
};

export default Timeline;
