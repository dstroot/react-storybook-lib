import React from "react";
import { storiesOf } from "@storybook/react";

// components
import LeadNewsItem from "../LeadNewsItem";
import image1 from "./media/wildfire.jpg";
const data = {
  data: {
    datetime: "2019-01-08",
    image: image1,
    cutline:
      "Pacific Life Foundation Donates $250,000 to the American Red Cross for Victims of the California Wildfires",
    headline:
      "Pacific Life Foundation Donates $250,000 to the American Red Cross for Victims of the California Wildfires",
    category: "Company News"
  }
};

// LeadNewsItem section
storiesOf("LeadNewsItem", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("show LeadNewsItem", () => <LeadNewsItem item={data} />);
