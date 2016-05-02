function key(x, y) {
  return `${x}:${y}`;
}

function toggle(set, x, y) {
  const id     = key(x, y);
  const newSet = Object.assign({}, set);
  if (set[id]) {
    delete newSet[id];
  } else {
    newSet[id] = true;
  }
  return newSet;
}

function member(set, x, y) {
  return set[key(x, y)] !== undefined;
}

export { toggle, member };
