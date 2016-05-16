import { connect } from "react-redux";
import { member }  from "../../structures/cell_set";
import Cell        from "../../components/cell";
import toggleCell  from "../../action_creators/toggle_cell";

function mapStateToProps(state) {
  return {
    isOn: (x, y) => member(state.cells, x, y),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (x, y) => dispatch(toggleCell(x, y)),
  };
}

const ConnectedCell = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default ConnectedCell;
