import React from "react";
import { storiesOf } from "@storybook/react";

// components
import Cards from "../Cards";

// Cards section
storiesOf("Cards", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("show Cards", () => <Cards />);
