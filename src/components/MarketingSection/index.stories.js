import React from "react";
import { storiesOf } from "@storybook/react";

// components
import MarketingSection from "../MarketingSection";

// MarketingSection section
storiesOf("MarketingSection", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("show MarketingSection", () => <MarketingSection />);
