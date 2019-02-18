import React from "react";
import { storiesOf } from "@storybook/react";

// components
import NewsForm from "../NewsForm";

// NewsForm section
storiesOf("NewsForm", module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false
    }
  })
  .add("show NewsForm", () => (
    <NewsForm
      valid={true}
      submitted={false}
      success="yes"
      message="Hello"
      datetime="Dec 25, 2018"
      headline="Headline"
      cutline="cutline"
      story="story"
      category="Company News"
      image="Image"
    />
  ))
  .add("show invalid NewsForm", () => (
    <NewsForm
      valid={false}
      submitted={false}
      success="yes"
      message="Hello"
      datetime="Dec 25, 2018"
      headline="Headline"
      cutline="cutline"
      story="story"
      category="Company News"
      image="Image"
    />
  ));
