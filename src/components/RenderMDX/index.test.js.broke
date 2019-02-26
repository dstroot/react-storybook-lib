import React from "react";
import renderer from "react-test-renderer";
import RenderMDX from "../RenderMDX";

describe("RenderMDX", () => {
  it("it should render", () => {
    const component = renderer.create(<RenderMDX />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
