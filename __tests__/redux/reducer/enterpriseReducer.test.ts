import expect from "expect";

import {
  enterpriseReducer,
  initialState,
  Types,
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
  test("should be dispatch Request Enterprise By ID", () => {
    const requestEnterprisesById = {
      type: Types.REQUEST_ENTERPRISE_BY_ID,
      id: 24,
    };
    const state = {
      ...initialState,
      isLoading: true,
      isError: false,
    };
    expect(enterpriseReducer(initialState, requestEnterprisesById)).toEqual(
      state
    );
  });
  test("should be dispatch Request Enterprise By ID Success ", () => {
    const requestEnterpriseByIdSuccess = {
      type: Types.SUCCESS_ENTERPRISE_BY_ID,
      enterpriseDetails: { name: "Facebook", type: "Tecnology" },
    };
    const state = {
      ...initialState,
      isLoading: false,
      isError: false,
      isFilter: false,
      enterpriseDetails: requestEnterpriseByIdSuccess.enterpriseDetails,
    };
    expect(
      enterpriseReducer(initialState, requestEnterpriseByIdSuccess)
    ).toEqual(state);
  });
  test("should be dispatch Request Enterprise By ID Failure", () => {
    const requestEnterprisesByIdFailure = {
      type: Types.FAILED_ENTERPRISE_BY_ID,
    };
    const state = {
      ...initialState,
      isLoading: false,
      isError: true,
    };
    expect(
      enterpriseReducer(initialState, requestEnterprisesByIdFailure)
    ).toEqual(state);
  });
  test("should be dispatch Request Enterprise By Filter", () => {
    const requestEnterprisesByFilter = {
      type: Types.REQUEST_ENTERPRISE_BY_FILTER,
      enterpriseType: "Tecnology",
      name: "Facebook",
    };
    const state = {
      ...initialState,
      isLoading: true,
      isFilter: true,
      isError: false,
      isFilterError: false,
    };
    expect(enterpriseReducer(initialState, requestEnterprisesByFilter)).toEqual(
      state
    );
  });
  test("should be dispatch Request By Filter Enterprise Success", () => {
    const requestEnterprisesByFilterSuccess = {
      type: Types.SUCCESS_ENTERPRISE_BY_FILTER,
      enterprises: [
        { name: "Facebook", type: "Tecnology" },
        { name: "Google", type: "Tecnology" },
      ],
    };
    const state = {
      ...initialState,
      isLoading: false,
      isFilterError: false,
      isFilter: true,
      filteredEnterprises: requestEnterprisesByFilterSuccess.enterprises,
    };
    expect(
      enterpriseReducer(initialState, requestEnterprisesByFilterSuccess)
    ).toEqual(state);
  });
  test("should be dispatch Request Enterprise Failure", () => {
    const requestEnterprisesByFilterFailure = {
      type: Types.FAILED_ENTERPRISE_BY_FILTER,
    };
    const state = {
      ...initialState,
      isLoading: false,
      isFilter: false,
      isFilterError: true,
    };
    expect(
      enterpriseReducer(initialState, requestEnterprisesByFilterFailure)
    ).toEqual(state);
  });
});
