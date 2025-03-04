import Button from "@/components/Button";
import FormGroup from "@/components/FormGroup";
import Input from "@/components/Input";
import PasswordToggler from "@/components/PasswordToggler";
import UserCard from "@/components/setting/UserCard";
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import { ScrollView } from "react-native";

const ProfileScreen = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <ScrollView>
      <Wrapper padding={20} gap={20}>
        <UserCard />
        <FormGroup>
          <Input
            label="Nama lengkap"
            placeholder="Nama user"
            value="Iqbal farhan syuhada"
          />
          <Input
            label="Email address"
            placeholder="Email address"
            value="iqbalfarhan1996@gmail.com"
          />

          <Input
            label="New Password"
            placeholder="Password"
            secureTextEntry={!show}
          />
          <Input
            label="Password Confirmation"
            placeholder="Password confirmation"
            secureTextEntry={!show}
          />

          <PasswordToggler show={show} setShow={setShow} />
        </FormGroup>
        <Button
          label="Simpan perubahan"
          icon="check"
          onPress={() => {}}
          loading
        />
      </Wrapper>
    </ScrollView>
  );
};

export default ProfileScreen;
