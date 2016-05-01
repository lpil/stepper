import React         from "react";
import TestUtils     from "react-addons-test-utils";
import BPMControl    from ".";

function setup() {
  const props = {
    bpm: 240, inc: function() {}, dec: function() {},
  };
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

it("sets the onclick handlers", () => {
  const vals = setup();
  const [dec, num, inc] = vals.output.props.children;
  expect(dec.props.onClick).to.equal(vals.props.dec);
  expect(num.props.onClick).to.equal(undefined);
  expect(inc.props.onClick).to.equal(vals.props.inc);
});
