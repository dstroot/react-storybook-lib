import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

// components
import TextHero from "../TextHero";

// TextHero section
storiesOf("TextHero", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(withKnobs)
  .add("show TextHero", () => (
    <TextHero
      heading={text("Heading", "This is a Heading")}
      text={text("Text", "This is some very important marketing text...")}
      link={text("Link", "https://somelink")}
    />
  ));
