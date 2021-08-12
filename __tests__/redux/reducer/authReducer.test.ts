import expect from "expect";

import {
  authReducer,
  initialState,
  Types,
} from "../../../src/redux/ducks/auth";

describe("Auth Redux", () => {
  test("should be return the initial state", () => {
    expect(authReducer(undefined, initialState)).toEqual(initialState);
  });
  test("should be dispatch authRequest", () => {
    const authRequest = {
      type: Types.REQUEST,
      email: "parthur259@gmail.com",
      password: "123456",
    };
    const state = {
      ...initialState,
      isLoading: true,
      isError: false,
    };
    expect(authReducer(initialState, authRequest)).toEqual(state);
  });
  test("should be dispatch authRequestSuccess", () => {
    const authRequestSuccess = {
      type: Types.SUCCESS,
      uid: "hash",
      accessToken: "hash",
      client: "cliente",
    };
    const state = {
      ...initialState,
      accessToken: authRequestSuccess.accessToken,
      uid: authRequestSuccess.uid,
      client: authRequestSuccess.client,
      isLoading: false,
      isError: false,
    };
    expect(authReducer(initialState, authRequestSuccess)).toEqual(state);
  });
  test("should be dispatch requestFail", () => {
    const authRequestFail = {
      type: Types.FAILED,
    };
    const state = {
      ...initialState,
      isLoading: false,
      isError: true,
    };
    expect(authReducer(initialState, authRequestFail)).toEqual(state);
  });

  test("should be dispatch auth clear", () => {
    const authClear = {
      type: Types.CLEAR,
    };
    const state = {
      ...initialState,
    };
    expect(authReducer(initialState, authClear)).toEqual(state);
  });
});
