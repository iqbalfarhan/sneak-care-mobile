import { ThemeColors, useColor } from "@/hooks/useColor";
import { sliceText } from "@/utils/helpers/text";
import React from "react";
import Badge from "../Badge";
import BarChart from "../BarChart";
import Card from "../Card";
import Text from "../Text";
import Wrapper from "../Wrapper";

const EarningCard = () => {
  const selectedColor: keyof ThemeColors = "card";
  const { color } = useColor();
  const { content } = color[selectedColor];

  return (
    <Card
      color={selectedColor}
      header={
        <Wrapper
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Wrapper>
            <Text color={content}>Pendapatan</Text>
            <Text color={content} variant="small">
              Tahun 2025
            </Text>
          </Wrapper>
          <Badge label="View report" color="neutral" />
        </Wrapper>
      }
      footer={
        <Text color={content} variant="small">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Text>
      }
    >
      <BarChart
        wrapperStyle={{ paddingHorizontal: 20 }}
        data={[
          {
            label: sliceText("Januari"),
            value: 130_000,
          },
          {
            label: sliceText("Februari"),
            value: 50_000,
          },
          {
            label: sliceText("Maret"),
            value: 70_000,
          },
          {
            label: sliceText("April"),
            value: 40_000,
          },
          {
            label: sliceText("Mei"),
            value: 50_000,
          },
          {
            label: sliceText("Juni"),
            value: 40_000,
          },
        ]}
      />
    </Card>
  );
};

export default EarningCard;
