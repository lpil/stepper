import "./style.scss";
import React, { PropTypes } from "react";
import Cell from "../../containers/connected_cell";
import { NUM_STEPS } from "../../config";

const stepRange = Object.freeze([...Array(NUM_STEPS).keys()]);

const Row = ({ y }) => (
  <div className="row">
    {stepRange.map(i => (
      <Cell x={i} y={y} key={i} />
    ))}
  </div>
);

Row.propTypes = {
  y: PropTypes.number.isRequired,
};

export default Row;
