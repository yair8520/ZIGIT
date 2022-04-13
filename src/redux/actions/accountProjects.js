import { fetchFromAccount } from "./account";
import { ACCOUNT_INFO } from "../Utils/types";

export const FetchData = ({ token }) =>
  fetchFromAccount({
    endpoint: "/info",
    options: {
      headers: new Headers({
        Authorization: "Bearer " + token,
      }),
    },
    FETCH_TYPE: ACCOUNT_INFO.FETCH,
    ERROR_TYPE: ACCOUNT_INFO.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT_INFO.FETCH_SUCCESS,
  });
