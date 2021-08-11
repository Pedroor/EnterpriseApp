import React, { useCallback } from "react";
import { EnterpriseDetailsView } from "./view";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Creators as EnterpriseActions } from "../../../redux/ducks/enterprise";
import { IState } from "../../../redux/store";
import { EnterpriseProps } from "../../../redux/ducks/enterprise/types";
import { useSelector, useDispatch } from "react-redux";

type ParamList = {
  EnterpriseDetails: {
    id: number;
  };
};

export default function EnterpriseDetails() {
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<ParamList, "EnterpriseDetails">>();

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

  return (
    <EnterpriseDetailsView
      enterpriseDetails={enterpriseDetails}
      enterpriseId={route.params.id}
      isError={isError}
      isLoading={isLoading}
      fetchEnterpriseById={fetchEnterpriseById}
    />
  );
}
