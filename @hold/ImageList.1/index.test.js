import React from "react";
import renderer from "react-test-renderer";

import ImageList from "../ImageList";
import data from "./images.json";

describe("ImageList", () => {
  it("it should render", () => {
    const component = renderer.create(<ImageList data={data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
