import React from "react";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { Button as ButtonComponent, ButtonTitle } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  title: string;
}

export default function Button({ isLoading, title, ...rest }: ButtonProps) {
  return (
    <ButtonComponent {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <ButtonTitle>{title}</ButtonTitle>
      )}
    </ButtonComponent>
  );
}
