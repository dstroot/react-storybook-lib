import React from "react";
import renderer from "react-test-renderer";

import Navigation from "../Navigation";

describe("Navigation", () => {
  it("it should render", () => {
    const component = renderer.create(<Navigation />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
