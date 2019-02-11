import React from "react";
import { storiesOf } from "@storybook/react";

// components
import FetchHooks from "../FetchHooks";

// FetchHooks section
storiesOf("FetchHooks", module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false,
      text: `
        Fetch data using hooks.
      `
    }
  })
  .add("show FetchHooks", () => <FetchHooks />);
