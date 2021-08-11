import styled from "styled-components/native";

export const Container = styled.View`
  height: 80px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.highBlack};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => theme.textVariants.bigTitle};
  color: ${(props) => props.theme.colors.yellow};
  text-align: center;
`;
