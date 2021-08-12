import api from "../../../services/api";
import { IState } from "../../store";
import { AxiosResponse } from "axios";
import { call, put, select, delay } from "redux-saga/effects";
import { Creators as EnterpriseActions } from "../../ducks/enterprise";
import { EnterpriseProps } from "../../ducks/enterprise/types";

interface IEnterprisesResponse {
  enterprises: EnterpriseProps[];
}
interface IEnterpriseByIdResponse {
  enterprise: EnterpriseProps;
  success: boolean;
}

export function* fetchEnterprises() {
  const uid: string = yield select((state: IState) => state.authReducer.uid);
  const accessToken: string = yield select(
    (state: IState) => state.authReducer.accessToken
  );
  const client: string = yield select(
    (state: IState) => state.authReducer.client
  );

  try {
    const response: AxiosResponse<IEnterprisesResponse> = yield call(
      api.get,
      "v1/enterprises",
      {
        headers: {
          uid,
          "access-token": accessToken,
          client,
        },
      }
    );
    yield put(
      EnterpriseActions.requestEnterprisesSuccess(response.data.enterprises)
    );
  } catch (err) {
    yield put(EnterpriseActions.requestEnterprisesFail());
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

export function* fetchEnterpriseById({ id }: { id: number }) {
  console.log("ID", id);
  const uid: string = yield select((state: IState) => state.authReducer.uid);
  const accessToken: string = yield select(
    (state: IState) => state.authReducer.accessToken
  );
  const client: string = yield select(
    (state: IState) => state.authReducer.client
  );

  try {
    const response: AxiosResponse<IEnterpriseByIdResponse> = yield call(
      api.get,
      `v1/enterprises/${id}`,
      {
        headers: {
          uid,
          "access-token": accessToken,
          client,
        },
      }
    );

    if (response.data.success) {
      yield put(
        EnterpriseActions.requestEnterprisesByIdSuccess(
          response.data.enterprise
        )
      );
    } else {
      yield put(EnterpriseActions.requestEnterprisesByIdFail());
    }
  } catch (err) {
    yield put(EnterpriseActions.requestEnterprisesByIdFail());
    let msg = "";
    if (err?.response?.status === 500 || err?.response?.status === 504) {
      msg = "Ops! Nosso sistema não está respondendo…";
    } else if (err?.response?.data?.errors) {
      msg = err?.response?.data?.errors[0];
    } else {
      msg = "Ops! Houve algum problema com sua solicitação.";
    }
    console.log("FETCH ENTTERPRISE BY ID", msg);
  }
}

export function* fetchEnterprisesByFilter({
  enterpriseType,
  name,
}: {
  enterpriseType: number;
  name: string;
}) {
  const uid: string = yield select((state: IState) => state.authReducer.uid);
  const accessToken: string = yield select(
    (state: IState) => state.authReducer.accessToken
  );
  const client: string = yield select(
    (state: IState) => state.authReducer.client
  );
  if (enterpriseType !== 500 && name !== "") {
    console.log("1");
    try {
      const response: AxiosResponse<IEnterprisesResponse> = yield call(
        api.get,
        `v1/enterprises?enterprise_types=${enterpriseType}&name=${name}`,
        {
          headers: {
            uid,
            "access-token": accessToken,
            client,
          },
        }
      );
      yield put(
        EnterpriseActions.requestEnterprisesByFilterSuccess(
          response.data.enterprises
        )
      );
    } catch (err) {
      yield put(EnterpriseActions.requestEnterprisesByFilterFail());
      let msg = "";
      if (err?.response?.status === 500 || err?.response?.status === 504) {
        msg = "Ops! Nosso sistema não está respondendo…";
      } else if (err?.response?.data?.errors) {
        msg = err?.response?.data?.errors[0];
      } else {
        msg = "Ops! Houve algum problema com sua solicitação.";
      }
    }
  } else if (enterpriseType !== 500 && name === "") {
    console.log("2");
    try {
      const response: AxiosResponse<IEnterprisesResponse> = yield call(
        api.get,
        `v1/enterprises?enterprise_types=${enterpriseType}`,
        {
          headers: {
            uid,
            "access-token": accessToken,
            client,
          },
        }
      );
      yield put(
        EnterpriseActions.requestEnterprisesByFilterSuccess(
          response.data.enterprises
        )
      );
    } catch (err) {
      yield put(EnterpriseActions.requestEnterprisesByFilterFail());
      let msg = "";
      if (err?.response?.status === 500 || err?.response?.status === 504) {
        msg = "Ops! Nosso sistema não está respondendo…";
      } else if (err?.response?.data?.errors) {
        msg = err?.response?.data?.errors[0];
      } else {
        msg = "Ops! Houve algum problema com sua solicitação.";
      }
    }
  } else if (enterpriseType === 500 && name !== "") {
    console.log("3");
    try {
      const response: AxiosResponse<IEnterprisesResponse> = yield call(
        api.get,
        `v1/enterprises?name=${name}`,
        {
          headers: {
            uid,
            "access-token": accessToken,
            client,
          },
        }
      );
      yield put(
        EnterpriseActions.requestEnterprisesByFilterSuccess(
          response.data.enterprises
        )
      );
    } catch (err) {
      yield put(EnterpriseActions.requestEnterprisesByFilterFail());
      let msg = "";
      if (err?.response?.status === 500 || err?.response?.status === 504) {
        msg = "Ops! Nosso sistema não está respondendo…";
      } else if (err?.response?.data?.errors) {
        msg = err?.response?.data?.errors[0];
      } else {
        msg = "Ops! Houve algum problema com sua solicitação.";
      }
    }
  } else if (enterpriseType === 500 && name === "") {
    console.log("4");
    try {
      const response: AxiosResponse<IEnterprisesResponse> = yield call(
        api.get,
        `v1/enterprises`,
        {
          headers: {
            uid,
            "access-token": accessToken,
            client,
          },
        }
      );
      console.log(response.data);
      yield put(
        EnterpriseActions.requestEnterprisesByFilterSuccess(
          response.data.enterprises
        )
      );
    } catch (err) {
      yield put(EnterpriseActions.requestEnterprisesByFilterFail());
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
}
