import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const CardContainer = styled.View`
  width: 95%;
  height: 200px;
  margin: 8px;
  border-radius: 12px;
  border-width: 0.5px;
  background-color: ${(props) => props.theme.colors.yellow};
`;

export const EnterpriseName = styled.Text`
  ${({ theme }) => theme.textVariants.title};
  text-align: center;
`;
export const EnterpriseType = styled.Text`
  ${({ theme }) => theme.textVariants.title};
  padding-right: 10px;
`;
export const EnterpriseCountry = styled.Text`
  ${({ theme }) => theme.textVariants.title};
`;
export const EnterpriseDescription = styled.Text`
  ${({ theme }) => theme.textVariants.body};
  padding-left: 5px;
`;

export const BoxCenter = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 6px;
`;
