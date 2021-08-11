import createReducer from "../../store/createReducer";
import { EnterpriseProps } from "./types";

/**
 * Types
 */

export const Types = {
  REQUEST_ENTERPRISE: "enterprise/REQUEST_ENTERPRISE",
  SUCCESS_ENTERPRISE: "enterprise/SUCCESS_ENTERPRISE",
  FAILED_ENTERPRISE: "enterprise/FAILED_ENTERPRISE",
  REQUEST_ENTERPRISE_BY_ID: "enterprise/REQUEST_ENTERPRISE_BY_ID",
  SUCCESS_ENTERPRISE_BY_ID: "enterprise/SUCCESS_ENTERPRISE_BY_ID",
  FAILED_ENTERPRISE_BY_ID: "enterprise/FAILED_ENTERPRISE_BY_ID",
  REQUEST_ENTERPRISE_BY_FILTER: "enterprise/REQUEST_ENTERPRISE_BY_FILTER",
  SUCCESS_ENTERPRISE_BY_FILTER: "enterprise/SUCCESS_ENTERPRISE_BY_FILTER",
  FAILED_ENTERPRISE_BY_FILTER: "enterprise/FAILED_ENTERPRISE_BY_FILTER",
  CLEAR: "auth/clear",
};
/**
 * Initial State
 */
export interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isFilter: boolean;
  isFilterError: boolean;
  enterprises: EnterpriseProps[];
  filteredEnterprises: EnterpriseProps[];
  enterpriseDetails: EnterpriseProps;
}

export type State = InitialState;

export const initialState: InitialState = {
  isLoading: false,
  isError: false,
  isFilter: false,
  isFilterError: false,
  enterprises: [],
  filteredEnterprises: [],
  enterpriseDetails: {},
};

/**/

/**
 * Reducers
 */

export const enterpriseReducer = createReducer(initialState, {
  [Types.REQUEST_ENTERPRISE](state: State) {
    return {
      ...state,
      isLoading: true,
      isError: false,
      isFilter: false,
    };
  },
  [Types.SUCCESS_ENTERPRISE](
    state: State,
    { enterprises }: { enterprises: object[] }
  ) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      isFilter: false,
      enterprises,
    };
  },
  [Types.FAILED_ENTERPRISE](state: State) {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  },
  [Types.REQUEST_ENTERPRISE_BY_ID](state: State) {
    return {
      ...state,
      isLoading: true,
      isError: false,
      isFilter: false,
    };
  },
  [Types.SUCCESS_ENTERPRISE_BY_ID](
    state: State,
    { enterpriseDetails }: { enterpriseDetails: EnterpriseProps }
  ) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      isFilter: false,
      enterpriseDetails,
    };
  },
  [Types.FAILED_ENTERPRISE_BY_ID](state: State) {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  },
  [Types.REQUEST_ENTERPRISE_BY_FILTER](state: State) {
    return {
      ...state,
      isLoading: true,
      isFilterError: false,
      isFilter: true,
    };
  },
  [Types.SUCCESS_ENTERPRISE_BY_FILTER](
    state: State,
    { enterprises }: { enterprises: object[] }
  ) {
    return {
      ...state,
      isLoading: false,
      isFilterError: false,
      isFilter: true,
      filteredEnterprises: enterprises,
    };
  },
  [Types.FAILED_ENTERPRISE_BY_FILTER](state: State) {
    return {
      ...state,
      isLoading: false,
      isFilterError: true,
      isFilter: false,
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
  requestEnterprises: () => ({
    type: Types.REQUEST_ENTERPRISE,
  }),
  requestEnterprisesSuccess: (enterprises: object[]) => ({
    type: Types.SUCCESS_ENTERPRISE,
    enterprises,
  }),
  requestEnterprisesFail: () => ({
    type: Types.FAILED_ENTERPRISE,
  }),
  requestEnterprisesById: (id: number) => ({
    type: Types.REQUEST_ENTERPRISE_BY_ID,
    id,
  }),
  requestEnterprisesByIdSuccess: (enterpriseDetails: object) => ({
    type: Types.SUCCESS_ENTERPRISE_BY_ID,
    enterpriseDetails,
  }),
  requestEnterprisesByIdFail: () => ({
    type: Types.FAILED_ENTERPRISE_BY_ID,
  }),
  requestEnterprisesByFilter: (enterpriseType: number, name: string) => ({
    type: Types.REQUEST_ENTERPRISE_BY_FILTER,
    enterpriseType,
    name,
  }),
  requestEnterprisesByFilterSuccess: (enterprises: object[]) => ({
    type: Types.SUCCESS_ENTERPRISE_BY_FILTER,
    enterprises,
  }),
  requestEnterprisesByFilterFail: () => ({
    type: Types.FAILED_ENTERPRISE_BY_FILTER,
  }),
  enterpriseClear: () => ({
    type: Types.CLEAR,
  }),
};
export default enterpriseReducer;
