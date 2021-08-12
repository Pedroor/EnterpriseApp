import React, { useCallback } from "react";
import { FavoriteListView } from "./view";
import { Creators as FavoriteListActions } from "../../../redux/ducks/favoriteList";
import { EnterpriseProps } from "../../../redux/ducks/enterprise/types";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../../redux/store";

export default function FavoriteList() {
  const dispatch = useDispatch();
  const favoriteList = useSelector<IState, EnterpriseProps[]>(
    (state) => state.favoriteListReducer.favoriteList
  );

  const removeEnterpriseInList = useCallback(
    (enterprise: EnterpriseProps) => {
      dispatch(FavoriteListActions.removeOnFavoriteListRequest(enterprise));
    },
    [dispatch]
  );
  return (
    <FavoriteListView
      removeEnterpriseInList={removeEnterpriseInList}
      favoriteList={favoriteList}
    />
  );
}
