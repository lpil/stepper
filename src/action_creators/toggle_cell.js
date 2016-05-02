function toggleCell(x, y) {
  return {
    type: "TOGGLE_CELL",
    x,
    y,
  };
}

export default toggleCell;
