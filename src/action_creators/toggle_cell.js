const toggleCell = function(x, y) {
  return {
    type: "TOGGLE_CELL",
    x,
    y,
  };
};

export default toggleCell;
