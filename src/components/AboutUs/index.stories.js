import React from "react";
import { storiesOf } from "@storybook/react";

// components
import AboutUs from "../AboutUs";

// AboutUs section
storiesOf("AboutUs", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("show AboutUs", () => <AboutUs />);
