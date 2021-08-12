import React from "react";
import { EnterpriseDetailsViewProps } from "../model";
import { LoadingModal, Header } from "../../../components/index";
import * as S from "./styles";

export function EnterpriseDetailsView({
  enterprise,
  isLoading,
  isError,
}: EnterpriseDetailsViewProps) {
  if (isLoading) {
    return <LoadingModal loading={isLoading} />;
  }
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
          enterprise.description.length > 140
            ? enterprise.description.substr(1, 140)
            : enterprise.description}
        </S.EnterpriseDescription>
      </S.CardContainer>
    </S.Container>
  );
}
