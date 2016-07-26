import "./main.scss";
import React           from "react";
import ReactDOM        from "react-dom";
import { Provider }    from "react-redux";
import samplesLoaded   from "./action_creators/samples_loaded";
import { loadSamples } from "./sampler";
import store           from "./store";
import Row             from "./components/row";
import * as sequencer  from  "./sequencer";

const audioContext = new AudioContext();
const handleLoaded = (samples) => {
  store.dispatch(samplesLoaded(samples));
  sequencer.init({ store, audioContext });
};
loadSamples(audioContext, handleLoaded);

document.writeln("<main/>");

ReactDOM.render(
  <Provider store={store}>
    <div className="grid">
      <Row y={0} />
      <Row y={1} />
      <Row y={2} />
      <Row y={3} />
      <Row y={4} />
      <Row y={5} />
    </div>
  </Provider>,
  document.querySelector("main")
);
