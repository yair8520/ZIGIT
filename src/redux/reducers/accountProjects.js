import { ACCOUNT_INFO } from "../Utils/types";
import fetchStates from "../Utils/fetchStates";

const DEFUALT_ACCOUNT = {
  projects: [],
};

const accountProjects = (state = DEFUALT_ACCOUNT, action) => {
  switch (action.type) {
    case ACCOUNT_INFO.FETCH:
      return {
        ...state,
        status: fetchStates.fetching,
      };
    case ACCOUNT_INFO.FETCH_ERROR:
      return {
        ...state,
        status: fetchStates.error,
      };
    case ACCOUNT_INFO.FETCH_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        projects: action.json,
      };

    default:
      return state;
  }
};
export default accountProjects;
