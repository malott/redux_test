import { combineReducers } from "redux";
import comic from "./comic";
import counter from "./counter";

export default combineReducers({
  counter,
  comic
});
