import React from "react";
import { Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";

interface HeaderProps {
  title?: string;
  firstIconFunction?: any;
  isHome: boolean;
  routeName?: string;
  firstIcon: string;
  secondIcon?: string;
}

export default function Header({
  title,
  firstIcon,
  isHome,
  firstIconFunction,
  routeName = "",
  secondIcon = "arrow",
}: HeaderProps) {
  const navigation = useNavigation();
  return (
    <Container>
      {isHome ? (
        <Icon
          name={firstIcon}
          size={24}
          color="#F2B138"
          onPress={() => firstIconFunction()}
        />
      ) : (
        <Icon
          name={firstIcon}
          size={24}
          color="#F2B138"
          onPress={() => navigation.goBack()}
        />
      )}

      <Title>{title}</Title>
      {secondIcon !== "arrow" ? (
        <IconAwesome
          name={secondIcon}
          size={24}
          color="#F2B138"
          onPress={() => navigation.navigate(`${routeName}`)}
          style={{ paddingRight: 15 }}
        />
      ) : (
        <View />
      )}
    </Container>
  );
}
