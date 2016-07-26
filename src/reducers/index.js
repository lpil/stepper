import { combineReducers } from "redux";
import bpm     from "./bpm";
import step    from "./step";
import cells   from "./cells";
import samples from "./samples";

const rootReducer = combineReducers({
  bpm,
  step,
  cells,
  samples,
});

export default rootReducer;
