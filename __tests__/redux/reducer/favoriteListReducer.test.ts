import expect from "expect";

import {
  favoriteListReducer,
  initialState,
  Types,
} from "../../../src/redux/ducks/favoriteList";
import { removeEnterpriseInList } from "../../../src/redux/sagas/favoriteList";

describe("Favorite List Redux", () => {
  test("should be return the initial state", () => {
    expect(favoriteListReducer(undefined, initialState)).toEqual(initialState);
  });
  test("should be dispatch add enterprise in list", () => {
    const addEnterpriseInList = {
      type: Types.ADD_REQUEST,
    };
    const state = {
      ...initialState,
    };
    expect(favoriteListReducer(initialState, addEnterpriseInList)).toEqual(
      state
    );
  });
  test("should be dispatch add enterprise in list Success", () => {
    const addEnterpriseInListSuccess = {
      type: Types.ADD_SUCCESS,
      enterprises: [],
    };
    const state = {
      ...initialState,
      favoriteList: addEnterpriseInListSuccess.enterprises,
    };
    expect(
      favoriteListReducer(initialState, addEnterpriseInListSuccess)
    ).toEqual(state);
  });
  test("should be dispatch add enterprise in list Failure", () => {
    const addEnterpriseInListFailure = {
      type: Types.ADD_FAILED,
    };
    const state = {
      ...initialState,
    };
    expect(
      favoriteListReducer(initialState, addEnterpriseInListFailure)
    ).toEqual(state);
  });
  test("should be dispatch remove enterprise in list", () => {
    const removeEnterpriseInList = {
      type: Types.REMOVE_REQUEST,
    };
    const state = {
      ...initialState,
    };
    expect(favoriteListReducer(initialState, removeEnterpriseInList)).toEqual(
      state
    );
  });
  test("should be dispatch remove enterprise in list Success", () => {
    const removeEnterpriseInListSuccess = {
      type: Types.ADD_REQUEST,
      enterprises: [],
    };
    const state = {
      ...initialState,
      favoriteList: removeEnterpriseInListSuccess.enterprises,
    };
    expect(
      favoriteListReducer(initialState, removeEnterpriseInListSuccess)
    ).toEqual(state);
  });
  test("should be dispatch remove enterprise in list Failure", () => {
    const removeEnterpriseInList = {
      type: Types.REMOVE_FAILED,
    };
    const state = {
      ...initialState,
    };
    expect(favoriteListReducer(initialState, removeEnterpriseInList)).toEqual(
      state
    );
  });
});
