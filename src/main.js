import samplesLoaded   from "./action_creators/samples_loaded";
import { loadSamples } from "./sampler";
import store           from "./store";

const audioContext = new AudioContext();
const boundLoaded  = samples => store.dispatch(samplesLoaded(samples));
loadSamples(audioContext, boundLoaded);

window.store = store;
