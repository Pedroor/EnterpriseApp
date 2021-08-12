import React from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";
import { EnterpriseProps } from "../../redux/ducks/enterprise/types";

interface EnterpriseCardProps {
  enterprise: EnterpriseProps;
  getDetails: (id: number) => void;
  isLoading: boolean;
}

export default function EnterpriseCard({
  enterprise,
  getDetails,
  isLoading,
}: EnterpriseCardProps) {
  function handleGetDetails() {
    if (isLoading) {
    }
  }
  return (
    <S.Container>
      <TouchableOpacity onPress={() => getDetails(enterprise.id)}>
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
      </TouchableOpacity>
    </S.Container>
  );
}
