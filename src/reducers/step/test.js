import incStep from "../../action_creators/inc_step";
import step    from ".";

it("has default arguments", () => {
  const state = step(undefined, {});
  expect(state).to.equal(0);
});

describe("INC_STEP handling", () => {
  it("increments the step value", () => {
    const action = incStep();
    const state  = step(0, action);
    expect(state).to.equal(1);
  });
});
