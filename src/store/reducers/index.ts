import { combineReducers } from "redux";
import { settingsReducer } from "./settingsReducer";
import { statusReducer } from "./statusReducer";
import { todoReducer } from "./todoReducer";
export const rootReducer = combineReducers({
  status: statusReducer,
  todo: todoReducer,
  settings: settingsReducer,
});
