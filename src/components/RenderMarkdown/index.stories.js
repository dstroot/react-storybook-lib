import React from "react";
import { storiesOf } from "@storybook/react";

// components
import RenderMarkdown from "../RenderMarkdown";

const example = `## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
Pretty neat, eh?
`;

// RenderMarkdown section
storiesOf("RenderMarkdown", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("show RenderMarkdown", () => <RenderMarkdown markdown={example} />);
