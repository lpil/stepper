import { toggle } from "../../structures/cell_set";

function cells(state = {}, action = undefined) {
  switch (action.type) {
    case "TOGGLE_CELL":
      return toggle(state, action.x, action.y);
      break;

    default:
      return state;
  }
}

export default cells;
