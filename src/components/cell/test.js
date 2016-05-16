import React     from "react";
import TestUtils from "react-addons-test-utils";
import Cell      from ".";

function setup(on = true) {
  const props = {
    isOn: () => on, onClick: function() {}, x: 64, y: 32,
  };
  const renderer = TestUtils.createRenderer();
  renderer.render(<Cell {...props} />);
  const output = renderer.getRenderOutput();
  return { props, output, renderer };
}

it("sets the colour depending on the `on` prop", () => {
  const onOut = setup(true).output;
  expect(onOut.props.style).to.deep.equal({ backgroundColor: "hotpink"});
  const offOut = setup(false).output;
  expect(offOut.props.style).to.equal(undefined);
});
