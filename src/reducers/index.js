import { combineReducers } from "redux";
import bpm    from "./bpm";
import cells  from "./cells";
import loaded from "./loaded";

const rootReducer = combineReducers({
  bpm,
  cells,
  loaded,
});

export default rootReducer;
