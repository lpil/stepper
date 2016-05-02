import toggleCell from "../../action_creators/toggle_cell";
import cells      from ".";

it("has default arguments", () => {
  const state = cells(undefined, {});
  expect(state).to.deep.equal({});
});

describe("TOGGLE_CELL handling", () => {
  it("can turn a cell on", () => {
    const action   = toggleCell(4, 4);
    const oldState = Object.freeze({});
    const state    = cells(oldState, action);
    expect(state).to.deep.equal({ "4:4": true });
  });

  it("can turn a cell off", () => {
    const action   = toggleCell(3, 8);
    const oldState = Object.freeze({ "3:8": true, "0:0": true});
    const state    = cells(oldState, action);
    expect(state).to.deep.equal({ "0:0": true });
  });
});
