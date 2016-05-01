import adjustBPM from "../../action_creators/adjust_bpm";
import bpm       from ".";

it("has default arguments", () => {
  const state = bpm(undefined, {});
  expect(state).to.equal(130);
});

describe("ADJUST_BPM handling", () => {
  it("handles a positive delta", () => {
    const action = adjustBPM(10);
    const state  = bpm(130, action);
    expect(state).to.equal(140);
  });

  it("handles a larger delta", () => {
    const action = adjustBPM(55);
    const state  = bpm(100, action);
    expect(state).to.equal(155);
  });

  it("handles a negative delta", () => {
    const action = adjustBPM(-1);
    const state  = bpm(100, action);
    expect(state).to.equal(99);
  });

  it("does not drop below 0", () => {
    const action = adjustBPM(-101);
    const state  = bpm(90, action);
    expect(state).to.equal(0);
  });
});
