import samplesLoaded from "../../action_creators/samples_loaded";
import loaded        from ".";

it("has default arguments", () => {
  const state = loaded(undefined, {});
  expect(state).to.equal(false);
});

describe("SAMPLES_LOADED handling", () => {
  it("sets the state to true", () => {
    const action = samplesLoaded();
    const state  = loaded(undefined, action);
    expect(state).to.equal(true);
  });
});
