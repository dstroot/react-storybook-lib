import React from "react";
import renderer from "react-test-renderer";
import ConfiguredParticles from "../ConfiguredParticles";

describe("ConfiguredParticles", () => {
  it("it should render", () => {
    const component = renderer.create(<ConfiguredParticles />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
