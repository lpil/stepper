import "./style.scss";
import React, { PropTypes } from "react";

const Cell = ({ step, isOn, onClick, x, y }) => {
  const properties = {
    className: "cell",
    onClick: function() { onClick(x, y); },
    style: {},
  };
  if (step === x) {
    properties.style.backgroundColor = "#ddd";
  }
  if (isOn(x, y)) {
    properties.style.backgroundColor = "hotpink";
  }
  return <div {...properties}></div>;
};

Cell.propTypes = {
  step: PropTypes.number.isRequired,
  isOn: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Cell;
