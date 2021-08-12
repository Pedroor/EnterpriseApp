import React, { useCallback } from "react";
import { FilterView } from "./View";
import { Creators as EnterpriseActions } from "../../../redux/ducks/enterprise";
import { EnterpriseProps } from "../../../redux/ducks/enterprise/types";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../../redux/store";

export default function Filter() {
  const dispatch = useDispatch();
  const filteredEnterprises = useSelector<IState, EnterpriseProps[]>(
    (state) => state.enterpriseReducer.filteredEnterprises
  );
  const isLoading = useSelector<IState, boolean>(
    (state) => state.enterpriseReducer.isLoading
  );
  const isError = useSelector<IState, boolean>(
    (state) => state.enterpriseReducer.isError
  );
  const isFilter = useSelector<IState, boolean>(
    (state) => state.enterpriseReducer.isFilter
  );
  const fetchEnterprisesByFilter = useCallback(
    (enterpriseType: number, name: string) => {
      dispatch(
        EnterpriseActions.requestEnterprisesByFilter(enterpriseType, name)
      );
    },
    [dispatch]
  );
  return (
    <FilterView
      filteredEnterprises={filteredEnterprises}
      isLoading={isLoading}
      isError={isError}
      isFilter={isFilter}
      fetchEnterprisesByFilter={fetchEnterprisesByFilter}
    />
  );
}
