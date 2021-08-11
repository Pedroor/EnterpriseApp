import React from "react";
import { View, Text } from "react-native";
import { HomeView } from "./model";

export function HomeView({
  enterprises,
  filteredEnterprises,
  isLoading,
  isError,
  isFilter,
  isFilterError,
  fetchEnterprises,
  fetchEnterpriseById,
  fetchEnterprisesByFilter,
}: HomeView) {
  return (
    <View>
      <Text>HomeView</Text>
    </View>
  );
}
