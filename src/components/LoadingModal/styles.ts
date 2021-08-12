import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  height: 14%;
  width: 75%;
  background-color: ${(props) => props.theme.colors.shape};
`;

export const LoadingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px;
`;

export const LoadingText = styled.Text`
  padding-left: 25px;
  font-size: 20px;
  padding-top: 10px;
  color: ${(props) => props.theme.colors.lowBlack};
  font-weight: bold;
`;
