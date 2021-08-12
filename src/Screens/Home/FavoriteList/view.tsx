import React from "react";
import { FavoriteListProps } from "../model";
import { LoadingModal, Header } from "../../../components/index";
import * as S from "./styles";
import { TouchableOpacity } from "react-native";

export function FavoriteListView({
  removeEnterpriseInList,
  favoriteList,
}: FavoriteListProps) {
  return (
    <S.Container>
      <Header title="Favorit List" firstIcon="arrow-back" isHome={false} />
      <S.EnterpriseList
        data={favoriteList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 12, paddingHorizontal: 12 }}
        numColumns={1}
        renderItem={({ item: enterprise }) => {
          return (
            <TouchableOpacity
              onPress={() => removeEnterpriseInList(enterprise)}
            >
              <S.CardContainer>
                <S.EnterpriseName>
                  {enterprise.enterprise_name}
                </S.EnterpriseName>
                <S.BoxCenter>
                  <S.EnterpriseType>
                    {enterprise.enterprise_type?.enterprise_type_name}
                  </S.EnterpriseType>
                  <S.EnterpriseCountry>
                    {enterprise.country}
                  </S.EnterpriseCountry>
                </S.BoxCenter>
                <S.EnterpriseDescription>
                  {enterprise?.description?.length !== undefined &&
                  enterprise.description.length > 300
                    ? enterprise.description.substr(1, 300)
                    : enterprise.description}
                </S.EnterpriseDescription>
              </S.CardContainer>
            </TouchableOpacity>
          );
        }}
        ListEmptyComponent={() => {
          return <S.Title>There is still no company on your list.!</S.Title>;
        }}
      />
    </S.Container>
  );
}
