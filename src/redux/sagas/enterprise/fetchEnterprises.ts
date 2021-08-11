import api from "../../../services/api";
import { IState } from "../../store";
import { call, put, select, delay } from "redux-saga/effects";

export function* fetchEnterprises() {
  const uid: string = yield select((state: IState) => state.authReducer.uid);
  const accessToken: string = yield select(
    (state: IState) => state.authReducer.accessToken
  );
  const client: string = yield select(
    (state: IState) => state.authReducer.client
  );

  try {
    const {
      data: { enterprises },
    } = yield call(api.get, "v1/enterprises");
  } catch (error) {}
}

export function* fetchEnterpriseById() {
  const uid: string = yield select((state: IState) => state.authReducer.uid);
  const accessToken: string = yield select(
    (state: IState) => state.authReducer.accessToken
  );
  const client: string = yield select(
    (state: IState) => state.authReducer.client
  );
}

export function* fetchEnterprisesByFilter() {
  const uid: string = yield select((state: IState) => state.authReducer.uid);
  const accessToken: string = yield select(
    (state: IState) => state.authReducer.accessToken
  );
  const client: string = yield select(
    (state: IState) => state.authReducer.client
  );
}
