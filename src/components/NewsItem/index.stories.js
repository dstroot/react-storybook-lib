import React from "react";
import { storiesOf } from "@storybook/react";

// components
import NewsItem from "../NewsItem";

const data = {
  data: {
    datetime: "2019-01-08",
    image: "",
    headline:
      "Pacific Life Foundation Donates $250,000 to the American Red Cross for Victims of the California Wildfires",
    category: "Company News"
  }
};

// NewsItem section
storiesOf("NewsItem", module).add("show NewsItem", () => (
  <NewsItem item={data} />
));
