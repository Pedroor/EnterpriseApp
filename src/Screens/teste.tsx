import React from "react";
import { useSelector } from "react-redux";
import store, { IState } from "../redux/store";
import { InitialState as AuthTypes } from "../redux/ducks/auth";
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
  const loading = useSelector<IState, boolean>(
    (state) => state.authReducer.isLoading
  );

  console.log(loading);
  console.log(store.getState());
  console.log(store.dispatch);
  return (
    <SafeAreaView>
      <Text>OLA MUNDO</Text>
      <Text>{loading}</Text>
      <TouchableOpacity
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      >
        <Text>Button</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
