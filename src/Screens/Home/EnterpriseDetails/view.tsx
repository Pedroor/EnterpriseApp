import React from "react";
import { EnterpriseDetailsViewProps } from "../model";
import { Header, Button } from "../../../components/index";
import * as S from "./styles";

export function EnterpriseDetailsView({
  enterprise,
  isLoading,
  isError,
  addEnterpriseInList,
}: EnterpriseDetailsViewProps) {
  return (
    <S.Container>
      <Header
        title="Specific Enterprise"
        firstIcon="arrow-back"
        isHome={false}
      />
      <S.CardContainer>
        <S.EnterpriseName>{enterprise.enterprise_name}</S.EnterpriseName>
        <S.BoxCenter>
          <S.EnterpriseType>
            {enterprise.enterprise_type?.enterprise_type_name}
          </S.EnterpriseType>
          <S.EnterpriseCountry>{enterprise.country}</S.EnterpriseCountry>
        </S.BoxCenter>
        <S.EnterpriseDescription>
          {enterprise?.description?.length !== undefined &&
          enterprise.description.length > 240
            ? enterprise.description.substr(1, 240)
            : enterprise.description}
        </S.EnterpriseDescription>
      </S.CardContainer>
      <Button
        title="Adicionar aos favoritos"
        onPress={() => addEnterpriseInList(enterprise)}
      />
    </S.Container>
  );
}
