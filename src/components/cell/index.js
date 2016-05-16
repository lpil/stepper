import "./style.scss";
import React, { PropTypes } from "react";

const Cell = ({ isOn, onClick, x, y }) => {
  const properties = {
    className: "cell",
    onClick: function() { onClick(x, y); },
  };
  if (isOn(x, y)) {
    properties.style = { backgroundColor: "hotpink" };
  }
  return <div {...properties}></div>;
};

Cell.propTypes = {
  isOn: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Cell;
