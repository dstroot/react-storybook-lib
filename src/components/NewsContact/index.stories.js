import React, { Suspense } from "react";
import { storiesOf } from "@storybook/react";

// components
import NewsContact from "../NewsContact";

// NewsContact section
storiesOf("NewsContact", module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false
    }
  })
  .add("show NewsContact", () => <NewsContact />);
