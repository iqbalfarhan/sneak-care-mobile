import PaketCard from "@/components/premium/PaketCard";
import Wrapper from "@/components/Wrapper";
import { Paket } from "@/utils/types/paket";
import React from "react";

const features: Paket[] = [
  {
    id: 1,
    name: "Gratis",
    price: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eaque voluptatum numquam natus incidunt voluptatibus",
    features: ["Fitur standard"],
  },
  {
    id: 2,
    name: "Premium",
    price: 200000,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis commodi eius tempora magnam animi error",
    features: [
      "Fitur standard",
      "Data teknisi dan kasir",
      "Pengaturan diskon",
      "Kirim invoice ke wa pelanggan",
      "Tambah lebih banyak karyawan",
    ],
  },
];

const Premium = () => {
  const currentPackage = "Premium";
  return (
    <Wrapper padding={20} gap={10}>
      {features.map((feature) => (
        <PaketCard
          key={feature.id}
          paket={feature}
          buttonColor={currentPackage === feature.name ? "primary" : "input"}
        />
      ))}
    </Wrapper>
  );
};

export default Premium;
