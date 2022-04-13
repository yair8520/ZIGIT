import { BACKEND } from "../../config/index";

import { ACCOUNT } from "../Utils/types";
export const fetchFromAccount =
  ({ endpoint, options, FETCH_TYPE, ERROR_TYPE, SUCCESS_TYPE }) =>
  (dispatch) => {
    dispatch({ type: FETCH_TYPE });
    return fetch(`${BACKEND.ADDRESS}${endpoint}`, options)
      .then((response) => response.json())
      .then((json) => {
        if (json.type === "error") {
          dispatch({ type: ERROR_TYPE });
          return { resMessage: "error" };
        } else {
          dispatch({ type: SUCCESS_TYPE, json });
          console.log(json);
          return { resMessage: "success" };
        }
      })
      .catch(() => {
        dispatch({ type: ERROR_TYPE });
        return { resMessage: "error" };
      });
  };

export const login = ({ username, password }) =>
  fetchFromAccount({
    endpoint: "/authenticate",
    options: {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_SUCCESS,
  });
