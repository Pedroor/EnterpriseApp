import React, { useState } from "react";
import { Header, Input, Button } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { FilterViewProps } from "../model";
import * as S from "./styles";

export function FilterView({
  isLoading,
  isError,
  isFilter,
  fetchEnterprisesByFilter,
}: FilterViewProps) {
  const [name, setName] = useState("");
  const [enterpriseType, setEnterpriseType] = useState("500");
  const navigation = useNavigation();

  function handleSearch() {
    fetchEnterprisesByFilter(parseInt(enterpriseType), name);
    navigation.navigate("Home");
  }

  return (
    <S.Container>
      <S.ContentContainer>
        <Header
          title="Filter Enterprise"
          firstIcon="arrow-back"
          isHome={false}
        />
        <Input
          placeholder="Enterprise Name"
          onChangeText={(value) => setName(value)}
        />
        <Input
          placeholder="Enterprise Type"
          keyboardType="numeric"
          onChangeText={(value) => setEnterpriseType(value)}
        />

        <Button
          title="Search"
          onPress={() => handleSearch()}
          isLoading={isLoading}
        />
      </S.ContentContainer>
    </S.Container>
  );
}
