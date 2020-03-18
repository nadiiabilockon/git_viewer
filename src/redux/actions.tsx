import * as types from "./types";
import { findUser, getDetails } from "../services/APIsersices";

export function fetchUserData(id: string) {
  return dispatch => {
    findUser(id)
      .then(response => {
        dispatch(receiveUserData(response.data));
      })
      .catch(error => {
        switch (error.response.status) {
          case 404:
            dispatch(gotError("No user with that email."));
            break;
          case 401:
            dispatch(gotError("Invalid user."));
            break;
          default:
            dispatch(gotError("Something wrong"));
            return;
        }
      });
  };
}

function receiveUserData(data: any) {
  return {
    type: types.RECEIVE_USER_DATA,
    payload: data
  };
}

export function fetchUserDetails(prop: string, user: string) {
  return (dispatch) => {
    dispatch({ type: types.SET_PENDING });
    getDetails(user, prop)
      .then(response => {
        dispatch(receiveUserDetails(response.data));
      })
      .catch(error => {
        dispatch(gotError(error));
      });
  };
}

function receiveUserDetails(data: any): types.Action {
  return {
    type: types.RECEIVE_USER_DETAILES,
    payload: data
  };
}

function gotError(data: string): types.Action {
  return {
    type: types.SET_ERROR,
    payload: data
  };
}
