import { applyEvery } from "./scheduler";
import { member }     from "./structures/cell_set";
import { NUM_STEPS }  from "./config";
import incStep        from "./action_creators/inc_step";

const bpm = 144;

function playStep(store) {
  store.dispatch(incStep());
  const { cells, samples, step } = store.getState();
  const currentY = step % NUM_STEPS;
  let y = samples.length;

  while (y--) {
    if (member(cells, currentY, y)) { samples[y].play(); }
  }
  return [store];
}

function init({ store, audioContext }) {
  if (!store || !audioContext) {
    throw "Store and AudioContext required by sequencer";
  }
  return applyEvery(playStep, [store], audioContext, 60 / bpm);
}

export { init };
