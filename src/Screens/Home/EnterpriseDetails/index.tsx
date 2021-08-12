import React, { useEffect, useCallback } from "react";
import { EnterpriseDetailsView } from "./view";
import { BackHandler } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { IState } from "../../../redux/store";
import { EnterpriseProps } from "../../../redux/ducks/enterprise/types";
import { Creators as FavoriteListActions } from "../../../redux/ducks/favoriteList";
import { useSelector, useDispatch } from "react-redux";
import { addEnterpriseInList } from "../../../redux/sagas/favoriteList";

type ParamList = {
  EnterpriseDetails: {
    enterprise: EnterpriseProps;
  };
};

export default function EnterpriseDetails() {
  const route = useRoute<RouteProp<ParamList, "EnterpriseDetails">>();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const enterpriseDetails = useSelector<IState, EnterpriseProps>(
    (state) => state.enterpriseReducer.enterpriseDetails
  );
  const isLoading = useSelector<IState, boolean>(
    (state) => state.enterpriseReducer.isLoading
  );
  const isError = useSelector<IState, boolean>(
    (state) => state.enterpriseReducer.isError
  );
  const addEnterpriseInList = useCallback(
    (enterprise: EnterpriseProps) => {
      dispatch(FavoriteListActions.addOnFavoriteListRequest(enterprise));
    },
    [dispatch]
  );

  const backAction = () => {
    navigation.goBack();
    return true;
  };

  return (
    <EnterpriseDetailsView
      enterpriseDetails={enterpriseDetails}
      enterprise={route.params.enterprise}
      isError={isError}
      isLoading={isLoading}
      addEnterpriseInList={addEnterpriseInList}
    />
  );
}
