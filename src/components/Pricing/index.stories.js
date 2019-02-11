import React from "react";
import { storiesOf } from "@storybook/react";

// components
import Pricing from "../Pricing";

// Pricing section
storiesOf("Pricing", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("show Pricing", () => <Pricing />);
