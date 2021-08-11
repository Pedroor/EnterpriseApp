import React from "react";
import { View, Text } from "react-native";
import { EnterpriseDetailsViewProps } from "../model";

export function EnterpriseDetailsView({
  enterpriseDetails,
  enterpriseId,
  isLoading,
  isError,
  fetchEnterpriseById,
}: EnterpriseDetailsViewProps) {
  return (
    <View>
      <Text>EnterpriseDetailsView</Text>
    </View>
  );
}
