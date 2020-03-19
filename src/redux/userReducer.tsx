import * as types from "./types";
import { Action } from "./types"
import { User } from "../models/interfaces"

export interface InitialState {
  user: User,
  userDetails: Array<any>,
  isLoginPending: boolean,
  error: string | null
}

export const defaultState: InitialState = {
  user: {} as User,
  userDetails: [],
  isLoginPending: false,
  error: null
};

export const userReducer = (state: InitialState = defaultState, action: Action): InitialState => {
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
      return { ...state, user: action.payload, isLoginPending: false, error: null };
    case types.RECEIVE_USER_DETAILES:
      return { ...state, userDetails: action.payload, isLoginPending: false };
    default:
      return state;
  }
};
