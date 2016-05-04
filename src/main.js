import * as sequencer from "./sequencer";
import store from "./store";

import * as sampler from "./sampler";
window.sampler = sampler;

const audioContext  = new AudioContext();
window.audioContext = audioContext;

window.run = function() {
  sequencer.init(store, audioContext);
};
