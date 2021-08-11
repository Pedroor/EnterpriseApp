import React, { useCallback, useEffect } from "react";
import { HomeView } from "./view";
import { useSelector, useDispatch } from "react-redux";
import { Creators as EnterpriseActions } from "../../redux/ducks/enterprise";
import { EnterpriseProps } from "../../redux/ducks/enterprise/types";
import { IState } from "../../redux/store";
import { Creators as AuthActions } from "../../redux/ducks/auth";
import { useNavigation } from "@react-navigation/native";
import { BackHandler, Alert } from "react-native";

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  useEffect(() => {
    fetchEnterprises();
  }, []);

  const enterprises = useSelector<IState, EnterpriseProps[]>(
    (state) => state.enterpriseReducer.enterprises
  );
  const filteredEnterprises = useSelector<IState, EnterpriseProps[]>(
    (state) => state.enterpriseReducer.filteredEnterprises
  );
  const isLoading = useSelector<IState, boolean>(
    (state) => state.enterpriseReducer.isLoading
  );
  const isError = useSelector<IState, boolean>(
    (state) => state.enterpriseReducer.isError
  );
  const isFilterError = useSelector<IState, boolean>(
    (state) => state.enterpriseReducer.isFilterError
  );
  const isFilter = useSelector<IState, boolean>(
    (state) => state.enterpriseReducer.isFilter
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
  const fetchEnterprisesByFilter = useCallback(
    (enterpriseType: number, name: string) => {
      dispatch(
        EnterpriseActions.requestEnterprisesByFilter(enterpriseType, name)
      );
    },
    [dispatch]
  );

  function handleLeaveApplication() {
    dispatch(AuthActions.setIsLogged(false));
    navigation.navigate("Login");
  }
  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () => handleLeaveApplication(),
      },
    ]);
    return true;
  };

  return (
    <HomeView
      enterprises={enterprises}
      filteredEnterprises={filteredEnterprises}
      isLoading={isLoading}
      isFilter={isFilter}
      isError={isError}
      isFilterError={isFilterError}
      fetchEnterprisesByFilter={fetchEnterprisesByFilter}
      fetchEnterpriseById={fetchEnterpriseById}
      fetchEnterprises={fetchEnterprises}
    />
  );
}
