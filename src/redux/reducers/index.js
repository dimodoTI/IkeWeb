import {
  combineReducers
} from "redux";
import {
  reducer as uiReducer
} from "./ui"

export const rootReducer = (state = {}, action) => {

  return {
    ui: uiReducer(state.ui, action),
  };
};