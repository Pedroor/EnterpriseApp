import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  padding-top: 160px;
  background-color: ${(props) => props.theme.colors.yellow};
`;

export const Container = styled(KeyboardAwareScrollView)`
  flex: 1;

  background-color: ${(props) => props.theme.colors.yellow};
`;
