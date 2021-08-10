import { takeLatest, all } from "redux-saga/effects";

import { authEnterprise } from "./auth";
const type = 10;

export default function* rootSaga() {
  return yield all[takeLatest(type, authEnterprise)];
}
