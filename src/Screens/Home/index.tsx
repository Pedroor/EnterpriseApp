import React, { useCallback, useEffect } from "react";
import { HomeView } from "./view";
import { useSelector, useDispatch } from "react-redux";
import { alertPromiseMultiParams } from "../../constants/functions";
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

  const handleClickArrow = useCallback(async () => {
    const isLogout = await alertPromiseMultiParams(
      "Do you want to go back to the home screen?",
      "ok",
      "cancelar"
    );

    if (isLogout) {
      navigation.goBack();
    }
  }, []);

  const handleLeaveApplication = useCallback(() => {
    dispatch(AuthActions.setIsLogged(false));
    navigation.navigate("Login");
  }, []);

  return (
    <HomeView
      enterprises={enterprises}
      filteredEnterprises={filteredEnterprises}
      isLoading={isLoading}
      isFilter={isFilter}
      isError={isError}
      isFilterError={isFilterError}
      fetchEnterprises={fetchEnterprises}
      handleClickArrow={handleClickArrow}
    />
  );
}
