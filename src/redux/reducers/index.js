import { combineReducers } from "redux";
import account from "./account";
import accountProjects from "./accountProjects";
export default combineReducers({
  account,
  accountProjects,
});
