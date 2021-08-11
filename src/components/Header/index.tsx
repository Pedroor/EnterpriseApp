import React from "react";
import { Container, Title } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { alertPromiseMultiParams } from "../../constants/functions";
import { View } from "react-native";

export default function Header() {
  const navigation = useNavigation();

  async function handleClickArrow() {
    const isLogout = await alertPromiseMultiParams(
      "Do you want to go back to the home screen?",
      "ok",
      "cancelar"
    );
    console.log(isLogout);
    if (isLogout) {
      navigation.goBack();
    }
  }

  return (
    <Container>
      <Icon
        name="arrow-back"
        size={24}
        color="#F2B138"
        onPress={() => handleClickArrow()}
      />
      <Title>Welcome to world enterprises</Title>
      <View />
    </Container>
  );
}
