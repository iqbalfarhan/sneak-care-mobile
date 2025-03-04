import { useGetDiscount } from "@/hooks/setting/useDiskon";
import { useColor } from "@/hooks/useColor";
import { Diskon } from "@/utils/types/diskon";
import React, { FC, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import BottomSheet from "../BottomSheet";
import Button from "../Button";
import Text from "../Text";
import Wrapper from "../Wrapper";
import DiskonItem from "../diskon/DiskonItem";

type PilihDiskonProps = {
  diskon: Diskon | null;
  onSave: (diskon: Diskon | null) => void;
};

const PilihDiskon: FC<PilihDiskonProps> = ({ onSave, diskon }) => {
  const { color } = useColor();
  const [show, setShow] = useState<boolean>(false);
  const { data: diskons } = useGetDiscount();
  const [selected, setSelected] = useState<Diskon | null>(diskon);
  return (
    <>
      {selected ? (
        <TouchableOpacity
          onPress={() => setShow(true)}
          onLongPress={() => {
            setSelected(null);
            onSave(null);
          }}
        >
          <DiskonItem diskon={selected} color="input" />
        </TouchableOpacity>
      ) : (
        <Button
          label="Pilih diskon"
          color="input"
          style={{ justifyContent: "flex-start" }}
          onPress={() => setShow(true)}
        />
      )}

      <BottomSheet
        title="Pilih diskon"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero culpa
          earum corrupti natus quo necessitatibus officia nesciunt laboriosam.
          Suscipit dolore, iusto quod magnam voluptas reiciendis voluptatum
          fugit numquam aliquam repellat.
        </Text>
        <ScrollView
          style={{ maxHeight: 400, borderRadius: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <Wrapper gap={5}>
            {diskons?.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={{
                  borderWidth: 2,
                  borderColor:
                    selected?.id === item.id ? color.primary.bg : "transparent",
                  borderRadius: 10,
                }}
                onPress={() => setSelected(item)}
                onLongPress={() => setSelected(null)}
              >
                <DiskonItem diskon={item} />
              </TouchableOpacity>
            ))}
          </Wrapper>
        </ScrollView>
        <Button
          label="Selesai pilih diskon"
          icon="check"
          color="primary"
          disabled={!selected}
          onPress={() => {
            onSave(selected);
            setShow(false);
          }}
        />
      </BottomSheet>
    </>
  );
};

export default PilihDiskon;
