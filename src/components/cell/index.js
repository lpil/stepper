import React, { PropTypes } from "react";

const Cell = ({ on, onClick, x, y }) => {
  const properties = {
    className: "cell",
    onClick: function() { onClick(x, y); },
  };
  if (on) {
    properties.style = { backgroundColor: "hotpink" };
  }
  return <div {...properties}></div>;
};

Cell.propTypes = {
  on: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Cell;
