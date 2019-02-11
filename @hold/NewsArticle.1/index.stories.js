import React from "react";
import { storiesOf } from "@storybook/react";

// components
import NewsArticle from "../NewsArticle";

const story = `## Heading

Here is some content

- List 1
- List 2`;

// NewsArticle section
storiesOf("NewsArticle", module).add("show NewsArticle", () => (
  <NewsArticle
    date="Dec 12, 2018"
    cutline="This is a cutline"
    headline="This is a headline!"
    story={story}
  />
));
