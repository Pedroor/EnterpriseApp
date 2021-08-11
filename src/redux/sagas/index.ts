import { takeLatest, all } from "redux-saga/effects";

import { authEnterprise } from "./auth";
import { Types as AuthTypes } from "../ducks/auth";

export default function* rootSaga(): Generator {
  console.log("AEAWE");
  return yield all([takeLatest(AuthTypes.REQUEST, authEnterprise)]);
}
