import { applyEvery } from "./scheduler";

const steps = 16;
const bpm   = 120;

function playStep(step, store) {
  const cellSet  = store.getState().cells;
  const nextStep = (step + 1) % steps;
  console.log("playing step ", step, "with cells ", cellSet);
  return [nextStep, store];
}

function init(store, ctx) {
  return applyEvery(playStep, [0, store], ctx, 60 / bpm);
}

export { init };
