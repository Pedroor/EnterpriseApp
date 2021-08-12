import React, { useEffect, useCallback } from "react";
import { EnterpriseDetailsView } from "./view";
import { BackHandler } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Creators as EnterpriseActions } from "../../../redux/ducks/enterprise";
import { IState } from "../../../redux/store";
import { EnterpriseProps } from "../../../redux/ducks/enterprise/types";
import { useSelector, useDispatch } from "react-redux";

type ParamList = {
  EnterpriseDetails: {
    enterprise: EnterpriseProps;
  };
};

export default function EnterpriseDetails() {
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<ParamList, "EnterpriseDetails">>();
  const navigation = useNavigation();

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
  const fetchEnterpriseById = useCallback(
    (id: number) => {
      dispatch(EnterpriseActions.requestEnterprisesById(id));
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
      fetchEnterpriseById={fetchEnterpriseById}
    />
  );
}
