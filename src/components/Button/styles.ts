import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 60px;

  align-items: center;
  justify-content: center;

  margin-top: 15px;

  border-width: 1;
  border-radius: 28px;

  background-color: ${(props) => props?.theme?.colors?.highBlack};
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => theme.textVariants.body};
  font-size: 18px;
  color: ${(props) => props.theme.colors?.shape};
`;
