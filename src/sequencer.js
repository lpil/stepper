import { applyEvery } from "./scheduler";
import { member }     from "./structures/cell_set";

const steps = 16;
const bpm   = 120;

function play(step, inst) {
  console.log("inst", inst, "triggered");
}

function playStep(step, store) {
  const state   = store.getState();
  const next    = (step + 1) % steps;
  const samples = state.samples;
  let y = samples.length;
  while (y--) {
    if (member(state.cells, step, y)) {
      play(step, samples[y].data);
    }
  }
  return [next, store];
}

function init(store, ctx) {
  return applyEvery(playStep, [0, store], ctx, 60 / bpm);
}

export { init };
