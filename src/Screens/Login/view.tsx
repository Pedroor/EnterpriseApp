import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ViewProps } from "./model";
import { Input, Image, Button } from "../../components";
import Logo from "../../assets/logo_ioasys.png";
import * as S from "./styles";

export function LoginView({
  isLoading,
  isError,
  isLogged,
  handleSignIn,
}: ViewProps) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isLogged) {
      navigation.navigate("Home");
    }
  }, [isLogged]);

  return (
    <S.SafeContainer>
      <S.Container
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image w={"400"} h={"180"} uri={Logo} />
        <Input
          placeholder="E-mail"
          icon="email"
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          placeholder="Password"
          icon="lock"
          onChangeText={(value) => setPassword(value)}
          secureTextEntry
        />
        <Button
          isLoading={isLoading}
          title="Entrar"
          onPress={() => handleSignIn(email, password)}
        />
      </S.Container>
    </S.SafeContainer>
  );
}
