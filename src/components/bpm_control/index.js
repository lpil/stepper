import React, { PropTypes } from "react";

const BPMControl = ({ bpm, dec, inc }) => (
  <section>
    <div className="bpm__dev" onClick={dec} >-</div>
    <div className="bpm__value">BPM - {bpm}</div>
    <div className="bpm__inc" onClick={inc} >+</div>
  </section>
);

BPMControl.propTypes = {
  bpm: PropTypes.number.isRequired,
  dec: PropTypes.func.isRequired,
  inc: PropTypes.func.isRequired,
};

export default BPMControl;
