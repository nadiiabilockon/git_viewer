import { User } from "../models/interfaces"

export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
export const RECEIVE_USER_DETAILES = "RECEIVE_USER_DETAILES";
export const SET_PENDING = "SET_PENDING";
export const SET_ERROR = "SET_ERROR";

interface RECEIVE_USER_DATA {
  type: "RECEIVE_USER_DATA";
  payload: User;
}

interface RECEIVE_USER_DETAILES {
  type: "RECEIVE_USER_DETAILES";
  payload: Array<any>;
}

interface SET_PENDING {
  type: "SET_PENDING";
}

interface SET_ERROR {
  type: "SET_ERROR";
  payload: string;
}

export type Action = RECEIVE_USER_DATA | RECEIVE_USER_DETAILES | SET_PENDING | SET_ERROR;