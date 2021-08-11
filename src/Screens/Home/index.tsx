import React, { useCallback } from "react";
import { HomeView } from "./view";
import { useSelector, useDispatch } from "react-redux";
import { Creators as EnterpriseActions } from "../../redux/ducks/enterprise";
import { EnterpriseProps } from "../../redux/ducks/enterprise/types";
import { IState } from "../../redux/store";
import { fetchEnterpriseById } from "../../redux/sagas/enterprise/fetchEnterprises";

export default function Home() {
  const dispatch = useDispatch();
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
