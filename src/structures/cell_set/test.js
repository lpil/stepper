import { toggle, member } from ".";

describe("toggle", () => {
  it("can switch ON a cell, without mutation", () => {
    const oldSet = Object.freeze({ "1:1": true });
    const newSet = toggle(oldSet, 2, 3);
    expect(newSet).to.deep.equal({ "1:1": true, "2:3": true });
  });

  it("can switch OFF a cell, without mutation", () => {
    const oldSet = Object.freeze({ "6:8": true, "1:1": true });
    const newSet = toggle(oldSet, 1, 1);
    expect(newSet).to.deep.equal({ "6:8": true });
  });
});

describe("member", () => {
  const set = Object.freeze({ "1:1": true, "8:5": true });

  it("can tell us about set members", () => {
    expect(member(set, 1, 1)).to.equal(true);
    expect(member(set, 8, 5)).to.equal(true);
  });

  it("can tell us about set members", () => {
    expect(member(set, 4, 3)).to.equal(false);
    expect(member(set, 6, 9)).to.equal(false);
  });
});
