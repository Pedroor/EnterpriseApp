import React from "react";
import { Modal, ActivityIndicator, Text } from "react-native";

import * as S from "./styles";

interface LoadingModalProps {
  loading: boolean;
}

export default function LoadingModal({ loading }: LoadingModalProps) {
  return (
    <Modal
      animationType="slide"
      visible={loading}
      transparent={true}
      statusBarTranslucent={true}
    >
      <S.ModalContainer>
        <S.ModalContent>
          <S.LoadingText>Carregando...</S.LoadingText>
          <S.LoadingContainer>
            <ActivityIndicator size="large" color="#DE3C4B" />
            <Text style={{ paddingLeft: 10, fontSize: 12 }}>Carregando...</Text>
          </S.LoadingContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
}
