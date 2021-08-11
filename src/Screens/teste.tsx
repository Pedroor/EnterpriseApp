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

export function Teste() {
  const dispatch = useDispatch();
  const loading = useSelector<IState, boolean>(
    (state) => state.authReducer.isLoading
  );

  const payload = {
    email: "PEDRO",
    password: "213",
  };

  const handleAddProductToCart = useCallback(
    (payload) => {
      dispatch(AuthActions.authRequest(payload));
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
