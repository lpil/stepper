import * as sequencer from "./sequencer";
import store from "./store";

const audioContext = new AudioContext();

window.run = function() {
  sequencer.init(store, audioContext);
};
