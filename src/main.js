import "./main.scss";
import React           from "react";
import ReactDOM        from "react-dom";
import { Provider }    from "react-redux";
import samplesLoaded   from "./action_creators/samples_loaded";
import { loadSamples } from "./sampler";
import store           from "./store";
import ConnectedCell   from "./containers/connected_cell";
import * as sequencer  from  "./sequencer";

const audioContext = new AudioContext();
const handleLoaded = (samples) => {
  store.dispatch(samplesLoaded(samples));
  sequencer.init({ store, audioContext });
};
loadSamples(audioContext, handleLoaded);

document.writeln("<main/>");

ReactDOM.render(
  <Provider store={store}><ConnectedCell x={1} y={2} /></Provider>,
  document.querySelector("main")
);
