import React from "react";
import { RefreshControl } from "react-native";
import { HomeViewProps } from "./model";
import { Header, EnterpriseCard, Button } from "../../components";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

export function HomeView({
  enterprises,
  filteredEnterprises,
  isLoading,
  isError,
  isFilter,
  isFilterError,
  fetchEnterprises,
  handleClickArrow,
}: HomeViewProps) {
  const navigation = useNavigation();

  return (
    <S.SafeContainer>
      <Header
        title={"Welcome to world enterprises"}
        firstIconFunction={handleClickArrow}
        routeName={"Filter"}
        firstIcon="arrow-back"
        secondIcon="search-plus"
        isHome={true}
      />
      <Button
        title="Consult Favorites"
        onPress={() => navigation.navigate("FavoriteList")}
      />
      {isFilter ? (
        <S.EnterpriseList
          data={filteredEnterprises}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 12, paddingHorizontal: 12 }}
          keyExtractor={(enterprise) => String(enterprise.id)}
          numColumns={2}
          renderItem={({ item: enterprise }) => {
            return <EnterpriseCard enterprise={enterprise} />;
          }}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={fetchEnterprises}
            />
          }
          ListEmptyComponent={() => {
            return <S.Title>Too bad we didn't find anything!</S.Title>;
          }}
        />
      ) : (
        <S.EnterpriseList
          data={enterprises}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 12, paddingHorizontal: 12 }}
          keyExtractor={(enterprise) => String(enterprise.id)}
          numColumns={2}
          renderItem={({ item: enterprise }) => {
            return <EnterpriseCard enterprise={enterprise} />;
          }}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={fetchEnterprises}
            />
          }
          ListEmptyComponent={() => {
            return <S.Title>Too bad we didn't find anything!</S.Title>;
          }}
        />
      )}
    </S.SafeContainer>
  );
}
