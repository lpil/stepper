import { NUM_STEPS } from "../../config";
import { connect } from "react-redux";
import { member }  from "../../structures/cell_set";
import Cell        from "../../components/cell";
import toggleCell  from "../../action_creators/toggle_cell";

export function mapStateToProps(state) {
  return {
    isOn: (x, y) => member(state.cells, x, y),
    step: state.step % NUM_STEPS,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onClick: (x, y) => dispatch(toggleCell(x, y)),
  };
}

const ConnectedCell = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default ConnectedCell;
