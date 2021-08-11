import api from "../../../services/api";
import { call, put, select, delay } from "redux-saga/effects";
import { Creators as AuthActions } from "../../ducks/auth";

export function* authEnterprise({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const payload = {
    email,
    password,
  };
  try {
    const {
      headers: { "access-token": accessToken, uid, client },
      data,
    } = yield call(api.post, "v1/users/auth/sign_in", payload);

    if (data.success) {
      yield put(AuthActions.authRequestSuccess(accessToken, uid, client));
    } else {
      yield put(AuthActions.authRequestFail());
    }
  } catch (err) {
    yield put(AuthActions.authRequestFail());
    let msg = "";
    if (err?.response?.status === 500 || err?.response?.status === 504) {
      msg = "Ops! Nosso sistema não está respondendo…";
    } else if (err?.response?.data?.errors) {
      msg = err?.response?.data?.errors[0];
    } else {
      msg = "Ops! Houve algum problema com sua solicitação.";
    }
  }
}
