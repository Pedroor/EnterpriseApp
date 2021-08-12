import api from "../../../services/api";
import { call, put, delay } from "redux-saga/effects";
import { Creators as AuthActions } from "../../ducks/auth";
import { alertPromiseMultiParams } from "../../../constants/functions";

export function* authEnterprise({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  yield put(AuthActions.setIsLogged(false));
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
      yield put(AuthActions.setIsLogged(true));
    } else {
      yield put(AuthActions.authRequestFail());

      const tryAgain = yield call(
        alertPromiseMultiParams,
        "Invalid login credentials. Please try again",
        "Try again?",
        "Close"
      );

      if (tryAgain) {
        yield put(AuthActions.authRequest(email, password));
      }
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

    yield put(AuthActions.authRequestFail());
    const tryAgain = yield call(
      alertPromiseMultiParams,
      msg,
      "Try again?",
      "Close"
    );

    if (tryAgain) {
      yield put(AuthActions.authRequest(email, password));
    }
  }
}
