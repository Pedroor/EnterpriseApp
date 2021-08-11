import expect from "expect";

import {
  enterpriseReducer,
  initialState,
  Types,
  Creators as ExampleActions,
} from "../../../src/redux/ducks/enterprise";

describe("Enterprise Redux", () => {
  test("should be return the initial state", () => {
    expect(enterpriseReducer(undefined, initialState)).toEqual(initialState);
  });
  test("should be dispatch Request Enterprise", () => {
    const requestEnterprises = {
      type: Types.REQUEST_ENTERPRISE,
    };
    const state = {
      ...initialState,
      isLoading: true,
      isError: false,
    };
    expect(enterpriseReducer(initialState, requestEnterprises)).toEqual(state);
  });
  test("should be dispatch Request Enterprise Success", () => {
    const requestEnterprisesSuccess = {
      type: Types.SUCCESS_ENTERPRISE,
      enterprises: [{ pedro: "oi", jose: "oi" }],
    };
    const state = {
      ...initialState,
      isLoading: false,
      isError: false,
      isFilter: false,
      enterprises: requestEnterprisesSuccess.enterprises,
    };
    expect(enterpriseReducer(initialState, requestEnterprisesSuccess)).toEqual(
      state
    );
  });
  test("should be dispatch Request Enterprise Failure", () => {
    const requestEnterprisesFailure = {
      type: Types.FAILED_ENTERPRISE,
    };
    const state = {
      ...initialState,
      isLoading: false,
      isError: true,
    };
    expect(enterpriseReducer(initialState, requestEnterprisesFailure)).toEqual(
      state
    );
  });
});
