import Button from "@/components/Button";
import Input from "@/components/Input";
import TokoCard from "@/components/setting/TokoCard";
import Wrapper from "@/components/Wrapper";
import { useGetToko } from "@/hooks/authentication/useGetMe";
import React, { useState } from "react";

const TokoScreen = () => {
  const { data, isLoading } = useGetToko();

  const [name, setName] = useState<string>(data?.name ?? "");
  const [address, setAddress] = useState<string>(data?.address ?? "");
  const [phone, setPhone] = useState<string>(data?.phone ?? "");
  const [instagram, setInstagram] = useState<string>(data?.instagram ?? "");

  return (
    <Wrapper padding={20} gap={20}>
      <TokoCard />
      <Wrapper gap={10}>
        <Input
          label="Nama toko"
          placeholder="Nama toko"
          value={name}
          onChangeText={setName}
        />
        <Input
          multiline
          label="Alamat toko"
          placeholder="Nama toko"
          value={address}
          numberOfLines={3}
          onChangeText={setAddress}
        />
        <Input
          label="Nomor telepon toko"
          placeholder="Nama toko"
          value={phone}
          onChangeText={setPhone}
        />
        <Input
          label="Username instagram"
          placeholder="@sneakcare"
          value={instagram}
          onChangeText={setInstagram}
        />
      </Wrapper>
      <Button label="Simpan perubahan" icon="check" />
    </Wrapper>
  );
};

export default TokoScreen;
