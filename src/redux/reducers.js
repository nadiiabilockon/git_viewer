import * as types from "./types";

export const initialState = {
  user: {},
  userDetails: {}
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_USER_DATA:
      return { ...state, user: action.payload };
    case types.RECEIVE_USER_DETAILES:
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};
