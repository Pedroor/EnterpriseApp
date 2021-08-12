import styled from "styled-components/native";
import { TextInput } from "react-native-gesture-handler";

export const InputArea = styled.View`
  width: 90%;
  height: 60px;
  flex-direction: row;
  align-items: center;

  padding: 0 15px;
  margin-top: 10px;

  background-color: ${(props) => props.theme.colors.shape};

  border-width: 1;
  border-radius: 28px;
`;

export const Input = styled(TextInput)`
  ${({ theme }) => theme.textVariants.body};
  font-size: 18px;
  padding: 0 10px;

  width: 90%;
  border-radius: 10px;
`;
