import createReducer from "../../store/createReducer";

/**
 * Types
 */

export const Types = {
  REQUEST: "auth/REQUEST",
  SUCCESS: "auth/SUCCESS",
  FAILED: "auth/FAILED",
  CLEAR: "auth/CLEAR",
  SET_IS_LOGGED: "auth/SET_IS_LOGGED",
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
  isLogged: boolean;
}

export type State = InitialState;

export const initialState: InitialState = {
  isLoading: false,
  isError: false,
  accessToken: "",
  client: "",
  uid: "",
  isLogged: false,
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
  [Types.SET_IS_LOGGED](state: State, { value }: { value: boolean }) {
    return {
      ...state,
      isLogged: value,
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
  setIsLogged: (value: boolean) => ({
    type: Types.SET_IS_LOGGED,
    value,
  }),
};
export default authReducer;
