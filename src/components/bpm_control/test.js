import React         from "react";
import TestUtils     from "react-addons-test-utils";
import BPMControl    from ".";

function setup() {
  const props    = { bpm: 240 };
  const renderer = TestUtils.createRenderer();
  renderer.render(<BPMControl {...props} />);
  const output = renderer.getRenderOutput();
  return { props, output, renderer };
}

it("renders correctly", () => {
  const [dec, num, inc] = setup().output.props.children;
  expect(dec.props.children         ).to.equal("-");
  expect(num.props.children.join("")).to.equal("BPM - 240");
  expect(inc.props.children         ).to.equal("+");
});
