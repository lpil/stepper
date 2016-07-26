import { applyEvery } from "./scheduler";
import { member }     from "./structures/cell_set";
import { NUM_STEPS } from "./config";

const steps = NUM_STEPS;
const bpm   = 144;

function playStep(step, store) {
  const state   = store.getState();
  const next    = (step + 1) % steps;
  const samples = state.samples;
  let y = samples.length;
  while (y--) {
    if (member(state.cells, step, y)) { samples[y].play(); }
  }
  return [next, store];
}

function init({ store, audioContext }) {
  if (!store || !audioContext) {
    throw "Store and AudioContext required by sequencer";
  }
  return applyEvery(playStep, [0, store], audioContext, 60 / bpm);
}

export { init };
