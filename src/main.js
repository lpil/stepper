import "./main.scss";
import React           from "react";
import ReactDOM        from "react-dom";
import { Provider }    from "react-redux";
import samplesLoaded   from "./action_creators/samples_loaded";
import { loadSamples } from "./sampler";
import store           from "./store";
import ConnectedCell   from "./containers/connected_cell";

const audioContext = new AudioContext();
const boundLoaded  = samples => store.dispatch(samplesLoaded(samples));
loadSamples(audioContext, boundLoaded);

document.writeln("<main/>");

ReactDOM.render(
  <Provider store={store}><ConnectedCell x={1} y={2} /></Provider>,
  document.querySelector("main")
);
