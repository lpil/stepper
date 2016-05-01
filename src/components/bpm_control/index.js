import React, { PropTypes } from "react";

const BPMControl = ({ bpm }) => (
  <section>
    <div className="bpm__dev">-</div>
    <div className="bpm__value">BPM - {bpm}</div>
    <div className="bpm__inc">+</div>
  </section>
);

BPMControl.propTypes = {
  bpm: PropTypes.number.isRequired,
};

export default BPMControl;
