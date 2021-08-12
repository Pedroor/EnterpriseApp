import { call, put, delay, select } from "redux-saga/effects";
import { EnterpriseProps } from "../../ducks/enterprise/types";
import favoriteList, {
  Creators as FavoriteListActions,
} from "../../ducks/favoriteList";
import { alertPromiseMultiParams } from "../../../constants/functions";
import { IState } from "../../store";
import favoriteList from "../../ducks/favoriteList";

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

  oldFavoriteList.unshift(enterprise);

  if (!existingEnterprise) {
    yield put(FavoriteListActions.addOnFavoriteListSuccess(oldFavoriteList));
  } else {
    yield put(FavoriteListActions.addOnFavoriteListFailure());
    yield call(
      alertPromiseMultiParams,
      "You already have this enterprise on the list.",
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
}
