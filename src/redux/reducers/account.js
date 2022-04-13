import { ACCOUNT } from "../Utils/types";
import fetchStates from "../Utils/fetchStates";

const DEFUALT_ACCOUNT = {
  token: "",
  personalDetails: {},
};

const account = (state = DEFUALT_ACCOUNT, action) => {
  switch (action.type) {
    case ACCOUNT.FETCH:
      return {
        ...state,
        status: fetchStates.fetching,
      };
    case ACCOUNT.FETCH_ERROR:
      return {
        ...state,
        status: fetchStates.error,
      };
    case ACCOUNT.FETCH_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        token: action.json[0].token,
        personalDetails: action.json[0].personalDetails,
      };
    default:
      return state;
  }
};
export default account;
