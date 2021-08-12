import styled from "styled-components/native";
import { FlatList } from "react-native";
import { EnterpriseProps } from "../../redux/ducks/enterprise/types";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;

  background-color: ${(props) => props.theme.colors.lightGray};
`;
export const EnterpriseList = styled(
  FlatList as new () => FlatList<EnterpriseProps>
)`
  flex: 1;
  margin: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => theme.textVariants.bigTitle};
  text-align: center;
`;
