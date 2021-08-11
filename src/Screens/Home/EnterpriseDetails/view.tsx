import React from "react";
import { View, Text } from "react-native";
import { EnterpriseDetailsView } from "../model";

export function EnterpriseDetailsView({
  enterpriseDetails,
  enterpriseId,
  isLoading,
  isError,
  fetchEnterpriseById,
}: EnterpriseDetailsView) {
  return (
    <View>
      <Text>EnterpriseDetailsView</Text>
    </View>
  );
}
