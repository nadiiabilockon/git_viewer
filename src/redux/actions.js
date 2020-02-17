import * as types from './types';
import { findUser, getDetails } from "../services/APIsersices";
import {store} from "../index";

export function fetchUserData(id) {
  return dispatch => {
    findUser(id)
      .then(response => {
        dispatch(receiveUserData(response.data));
      })
      .catch(error => {
        switch (error.response.status) {
          case 404:
            console.log("No user with that email.");
            break;
          case 401:
            console.log("Invalid user.");
            break;
          default:
            console.log("There was an error loggin in");
            return;
        }
      });
  };
}

function receiveUserData(data) {
  return {
    type: types.RECEIVE_USER_DATA,
    payload: data
  };
}

export function fetchUserDetails() {
  const user = store.getState().user.login;
         return dispatch => {
           getDetails(user)
             .then(response => {
               dispatch(receiveUserDetails(response.data));
             })
             .catch(error => {
               switch (error.response.status) {
                 case 404:
                   console.log("No user with that email.");
                   break;
                 case 401:
                   console.log("Invalid user.");
                   break;
                 default:
                   console.log("There was an error loggin in");
                   return;
               }
             });
         };
       }

function receiveUserDetails(data) {
  return {
    type: types.RECEIVE_USER_DETAILES,
    payload: data
  };
}