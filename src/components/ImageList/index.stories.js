import React from "react";
import { storiesOf } from "@storybook/react";

// components
import ImageList from "../ImageList";
import data from "./images.json";

// ImageList section
storiesOf("ImageList", module).add("show ImageList", () => (
  <ImageList data={data} />
));
