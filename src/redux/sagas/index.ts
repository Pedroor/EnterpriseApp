import { takeLatest, all } from "redux-saga/effects";

import { authEnterprise } from "./auth";
import {
  fetchEnterprises,
  fetchEnterpriseById,
  fetchEnterprisesByFilter,
} from "./enterprise/fetchEnterprises";
import { addEnterpriseInList, removeEnterpriseInList } from "./favoriteList";

import { Types as AuthTypes } from "../ducks/auth";
import { Types as EnterpriseTypes } from "../ducks/enterprise";
import { Types as FavoriteListTypes } from "../ducks/favoriteList";

export default function* rootSaga(): Generator {
  return yield all([
    takeLatest(AuthTypes.REQUEST, authEnterprise),
    takeLatest(EnterpriseTypes.REQUEST_ENTERPRISE, fetchEnterprises),
    takeLatest(EnterpriseTypes.REQUEST_ENTERPRISE_BY_ID, fetchEnterpriseById),
    takeLatest(
      EnterpriseTypes.REQUEST_ENTERPRISE_BY_FILTER,
      fetchEnterprisesByFilter
    ),
    takeLatest(FavoriteListTypes.ADD_REQUEST, addEnterpriseInList),
    takeLatest(FavoriteListTypes.REMOVE_REQUEST, removeEnterpriseInList),
  ]);
}
