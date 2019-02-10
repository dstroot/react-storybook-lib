import React from "react";
import renderer from "react-test-renderer";

import ContactUs from "../ContactUs";

describe("ContactUs", () => {
  it("it should render", () => {
    const component = renderer.create(<ContactUs />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
