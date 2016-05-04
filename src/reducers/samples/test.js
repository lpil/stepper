import samplesLoaded from "../../action_creators/samples_loaded";
import samples        from ".";

it("has default arguments", () => {
  const state = samples(undefined, {});
  expect(state).to.deep.equal([]);
});

describe("SAMPLES_LOADED handling", () => {
  it("sets the state to true", () => {
    const action = samplesLoaded([1, 2, 3]);
    const state  = samples(undefined, action);
    expect(state).to.deep.equal([1, 2, 3]);
  });
});
