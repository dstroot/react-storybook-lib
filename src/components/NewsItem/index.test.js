import React from "react";
import renderer from "react-test-renderer";

import NewsItem from "../NewsItem";

const data = {
  data: {
    datetime: "2019-01-08",
    image: "/media/i.jpg",
    headline:
      "Pacific Life Foundation Donates $250,000 to the American Red Cross for Victims of the California Wildfires",
    category: "Company News"
  }
};

describe("NewsItem", () => {
  it("it should render", () => {
    const component = renderer.create(<NewsItem item={data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
