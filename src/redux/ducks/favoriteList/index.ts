import createReducer from "../../store/createReducer";

/**
 * Types
 */
interface EnterpriseProps {
  id?: number;
  enterprise_name?: string;
  description?: string;
  photo?: string;
  country?: string;
  share_price?: number;
  enterprise_type?: {
    id: number;
    enterprise_type_name: string;
  };
}

export const Types = {
  ADD_REQUEST: "favoriteList/ADD_REQUEST",
  ADD_SUCCESS: "favoriteList/ADD_SUCCESS",
  ADD_FAILED: "favoriteList/ADD_FAILED",
  REMOVE_REQUEST: "favoriteList/REMOVE_REQUEST",
  REMOVE_SUCCESS: "favoriteList/REMOVE_SUCCESS",
  REMOVE_FAILED: "favoriteList/REMOVE_FAILED",
};
/**
 * Initial State
 */
export interface InitialState {
  favoriteList: EnterpriseProps[];
}

export type State = InitialState;

export const initialState: InitialState = {
  favoriteList: [],
};

/**/

/**
 * Reducers
 */

export const favoriteListReducer = createReducer(initialState, {
  [Types.ADD_REQUEST](state: State) {
    return {
      ...state,
    };
  },
  [Types.ADD_SUCCESS](
    state: State,
    { enterprises }: { enterprises: EnterpriseProps[] }
  ) {
    return {
      ...state,
      favoriteList: enterprises,
    };
  },
  [Types.ADD_FAILED](state: State) {
    return {
      ...state,
    };
  },
  [Types.REMOVE_REQUEST](state: State) {
    return {
      ...state,
    };
  },
  [Types.REMOVE_SUCCESS](
    state: State,
    { enterprises }: { enterprises: EnterpriseProps[] }
  ) {
    return {
      ...state,
      favoriteList: enterprises,
    };
  },
  [Types.REMOVE_FAILED](state: State) {
    return {
      ...state,
    };
  },
});

/**
 * Actions
 */
export const Creators = {
  addOnFavoriteListRequest: (enterprise: EnterpriseProps) => ({
    type: Types.ADD_REQUEST,
    enterprise,
  }),
  addOnFavoriteListSuccess: (enterprises: EnterpriseProps[]) => ({
    type: Types.ADD_SUCCESS,
    enterprises,
  }),
  addOnFavoriteListFailure: () => ({
    type: Types.ADD_FAILED,
  }),
  removeOnFavoriteListRequest: (enterprise: EnterpriseProps) => ({
    type: Types.REMOVE_REQUEST,
    enterprise,
  }),
  removeOnFavoriteListSuccess: (enterprises: EnterpriseProps[]) => ({
    type: Types.REMOVE_SUCCESS,
    enterprises,
  }),
  removeOnFavoriteListFailure: () => ({
    type: Types.REMOVE_FAILED,
  }),
};
export default favoriteListReducer;
