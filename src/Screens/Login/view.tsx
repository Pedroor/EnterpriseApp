import React from "react";
import { View, Text } from "react-native";
import { ViewProps } from "./model";

export function LoginView({ isLoading, isError, handleSignIn }: ViewProps) {
  return (
    <View>
      <Text>LoginView</Text>
    </View>
  );
}
