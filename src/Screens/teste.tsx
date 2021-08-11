import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import store, { IState } from "../redux/store";
import {
  InitialState as AuthTypes,
  Creators as AuthActions,
} from "../redux/ducks/auth";
import { Creators as EnterpriseActions } from "../redux/ducks/enterprise";
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
  const id = 5;
  const type = 12;
  const name = "HSQ";

  const handleAddProductToCart = useCallback(
    (payload: Payload) => {
      dispatch(AuthActions.authRequest(payload.email, payload.password));
    },
    [dispatch]
  );
  const fetchEnterprises = useCallback(() => {
    dispatch(EnterpriseActions.requestEnterprises());
  }, [dispatch]);
  const fetchEnterpriseById = useCallback(
    (id: number) => {
      dispatch(EnterpriseActions.requestEnterprisesById(id));
    },
    [dispatch]
  );
  const fetchEnterpriseByFilter = useCallback(
    (type: number, name: string) => {
      dispatch(EnterpriseActions.requestEnterprisesByFilter(type, name));
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
        <Text>Auth</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ width: 100, height: 100, backgroundColor: "red" }}
        onPress={() => fetchEnterprises()}
      >
        <Text>Fetch Enterprise</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ width: 100, height: 100, backgroundColor: "red" }}
        onPress={() => fetchEnterpriseById(id)}
      >
        <Text>BUSCAR ID</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ width: 100, height: 100, backgroundColor: "red" }}
        onPress={() => fetchEnterpriseByFilter(type, name)}
      >
        <Text>BUSCAR FILTRO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
