import "./main.scss";
import samplesLoaded   from "./action_creators/samples_loaded";
import { loadSamples } from "./sampler";
import store           from "./store";

import "./components/cell";

const audioContext = new AudioContext();
const boundLoaded  = samples => store.dispatch(samplesLoaded(samples));
loadSamples(audioContext, boundLoaded);

import React         from "react";
import ReactDOM      from "react-dom";
import { Provider }  from "react-redux";
import ConnectedCell from "./containers/connected_cell";

document.writeln("<main/>");

ReactDOM.render(
  <Provider store={store}><ConnectedCell x={1} y={2} /></Provider>,
  document.querySelector("main")
);
