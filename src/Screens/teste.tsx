import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import store, { IState } from "../redux/store";
import {
  InitialState as AuthTypes,
  Creators as AuthActions,
} from "../redux/ducks/auth";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Payload {
  email: string;
  password: string;
}

export function Teste() {
  const dispatch = useDispatch();
  const loading = useSelector<IState, boolean>(
    (state) => state.authReducer.isLoading
  );

  const payload = {
    email: "testeapple@ioasys.com.br",
    password: "12341234",
  };

  const handleAddProductToCart = useCallback(
    (payload: Payload) => {
      dispatch(AuthActions.authRequest(payload.email, payload.password));
    },
    [dispatch]
  );

  return (
    <SafeAreaView>
      <Text>OLA MUNDO</Text>
      <Text>{loading}</Text>
      <TouchableOpacity
        style={{ width: 100, height: 100, backgroundColor: "red" }}
        onPress={() => handleAddProductToCart(payload)}
      >
        <Text>Button</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
