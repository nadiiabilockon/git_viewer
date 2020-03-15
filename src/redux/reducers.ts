import * as types from "./types";

export type initialState = {
  user: Object,
  userDetails: Array<any>,
  isLoginPending: boolean,
  error: string | null
}

export const initialState: initialState = {
  user: {},
  userDetails: [],
  isLoginPending: false,
  error: null
};

export const rootReducer = (state: initialState = initialState, action: any) => {
  switch (action.type) {
    case types.SET_PENDING:
      return {
        ...state,
        isLoginPending: true
      };
    case types.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case types.RECEIVE_USER_DATA:
      return { ...state, user: action.payload, isLoginPending: false, error: false };
    case types.RECEIVE_USER_DETAILES:
      return { ...state, userDetails: action.payload, isLoginPending: false };
    default:
      return state;
  }
};
