import React     from "react";
import TestUtils from "react-addons-test-utils";
import Cell      from ".";

function setup({ on = true, step = 0, x = 4, y = 5 }) {
  const props = {
    isOn: () => on,
    onClick: function() {},
    step,
    x,
    y,
  };
  const renderer = TestUtils.createRenderer();
  renderer.render(<Cell {...props} />);
  const output = renderer.getRenderOutput();
  return { props, output, renderer };
}

describe("Cell component", () => {
  it("sets the colour depending on the `on` prop", () => {
    const onOut = setup({ on: true }).output;
    expect(onOut.props.style).to.deep.equal({ backgroundColor: "hotpink"});
    const offOut = setup({ on: false }).output;
    expect(offOut.props.style).to.deep.equal({});
  });

  it("sets the colour depending on the `step` prop", () => {
    const out1 = setup({ on: false, step: 2, x: 2 }).output;
    expect(out1.props.style.backgroundColor).not.to.equal(undefined);
    const out2 = setup({ on: false, step: 3, x: 2 }).output;
    expect(out2.props.style.backgroundColor).to.equal(undefined);
  });
});
