import createReducer from "../../store/createReducer";

/**
 * Types
 */

export const Types = {
  REQUEST: "auth/request",
  SUCCESS: "auth/success",
  FAILED: "auth/failed",
  CLEAR: "auth/clear",
};
/**
 * Initial State
 */
export interface InitialState {
  isLoading: boolean;
  isError: boolean;
  accessToken: string;
  client: string;
  uid: string;
}

export type State = InitialState;

export const initialState: InitialState = {
  isLoading: false,
  isError: false,
  accessToken: "",
  client: "",
  uid: "",
};

/**/

/**
 * Reducers
 */

export const authReducer = createReducer(initialState, {
  [Types.REQUEST](state: State) {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  },
  [Types.SUCCESS](
    state: State,
    {
      uid,
      accessToken,
      client,
    }: {
      uid: string;
      accessToken: string;
      client: string;
    }
  ) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      uid,
      accessToken,
      client,
    };
  },
  [Types.FAILED](state: State) {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  },
  [Types.CLEAR](state: State) {
    return {
      ...state,
    };
  },
});

/**
 * Actions
 */
export const Creators = {
  authRequest: (email: string, password: string) => ({
    type: Types.REQUEST,
    email,
    password,
  }),
  authRequestSuccess: (accessToken: string, uid: string, client: string) => ({
    type: Types.SUCCESS,
    accessToken,
    uid,
    client,
  }),
  authRequestFail: () => ({
    type: Types.FAILED,
  }),
  authClear: () => ({
    type: Types.CLEAR,
  }),
};
export default authReducer;
