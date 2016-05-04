import { combineReducers } from "redux";
import bpm     from "./bpm";
import cells   from "./cells";
import samples from "./samples";

const rootReducer = combineReducers({
  bpm,
  cells,
  samples,
});

export default rootReducer;
