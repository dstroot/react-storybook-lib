import React from "react";
import renderer from "react-test-renderer";

import ImageItem from "../ImageItem";
const data = {
  id: "1",
  date: "11-14-18",
  alt: "something",
  full: "/media/wildfire.jpg",
  thumb: "/media/wildfire.jpg",
  title: "California Wildfire windy 2018",
  description:
    "Pacific Life Foundation Donates $250,000 to the American Red Cross for Victims of the California Wildfires",
  category: "Logos"
};

describe("ImageItem", () => {
  it("it should render", () => {
    const component = renderer.create(<ImageItem image={data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
