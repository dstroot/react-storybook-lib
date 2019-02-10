import React from "react";
import { storiesOf } from "@storybook/react";

// components
import ContactUs from "../ContactUs";

// ContactUs section
storiesOf("ContactUs", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("show ContactUs", () => <ContactUs />);
