import { applyEvery } from "./scheduler";
import { member } from "./structures/cell_set";

const steps = 16;
const rows  = 16;
const bpm   = 120;

function play(step, inst) {
  console.log("inst", inst, "triggered");
}

function playStep(step, store) {
  const cells = store.getState().cells;
  const next  = (step + 1) % steps;
  let y = rows;
  while (y--) {
    if (member(cells, step, y)) { play(step, y); }
  }
  return [next, store];
}

function init(store, ctx) {
  return applyEvery(playStep, [0, store], ctx, 60 / bpm);
}

export { init };
