import React from "react";
import { InputArea, Input as TextInput } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  icon?: string;
  sizeIcon?: number;
  colorIcon?: string;
}

export default function Input({
  icon,
  sizeIcon = 24,
  colorIcon = "#1a1918",
  ...rest
}: InputProps) {
  return (
    <InputArea>
      <TextInput {...rest} />
      {icon && (
        <Icon
          name={icon}
          size={24}
          color={colorIcon}
          style={{ paddingRight: 24 }}
        />
      )}
    </InputArea>
  );
}
