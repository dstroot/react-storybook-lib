import React from "react";
import { storiesOf } from "@storybook/react";

// components
import APIList from "../APIList";

// APIList section
storiesOf("APIList", module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false
    }
  })
  .add("show APIList", () => (
    <APIList url="https://www.dallasopendata.com/resource/f29b-eiwd.json?$limit=20" />
  ));
