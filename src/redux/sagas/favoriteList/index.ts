import { call, put, select } from "redux-saga/effects";
import { EnterpriseProps } from "../../ducks/enterprise/types";
import favoriteList, {
  Creators as FavoriteListActions,
} from "../../ducks/favoriteList";
import {
  alertPromiseMultiParams,
  alertPromise,
} from "../../../constants/functions";
import { IState } from "../../store";

export function* addEnterpriseInList({
  enterprise,
}: {
  enterprise: EnterpriseProps;
}) {
  let oldFavoriteList: EnterpriseProps[] = yield select(
    (state: IState) => state.favoriteListReducer.favoriteList
  );

  let existingEnterprise = oldFavoriteList.find(
    (enterpriseInList) => enterpriseInList.id === enterprise.id
  );

  if (!existingEnterprise) {
    oldFavoriteList.unshift(enterprise);
    yield put(FavoriteListActions.addOnFavoriteListSuccess(oldFavoriteList));
    yield call(
      alertPromise,
      "The enterprise has been successfully added to favorites!.",
      "Ok"
    );
  } else {
    yield put(FavoriteListActions.addOnFavoriteListFailure());
    yield call(
      alertPromise,
      "The enterprise is already present in your favorites list!",
      "Ok"
    );
  }
}

export function* removeEnterpriseInList({
  enterprise,
}: {
  enterprise: EnterpriseProps;
}) {
  const oldFavoriteList: EnterpriseProps[] = yield select(
    (state: IState) => state.favoriteListReducer.favoriteList
  );

  let newfavoriteList = oldFavoriteList.filter(
    (enterpriseInList) => enterpriseInList.id !== enterprise.id
  );
  yield put(FavoriteListActions.removeOnFavoriteListSuccess(newfavoriteList));
  yield call(alertPromise, "The enterprise was successfully removed!.", "Ok");
}
