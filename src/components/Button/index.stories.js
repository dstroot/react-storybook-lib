import React from "react";
import { storiesOf } from "@storybook/react";

// components
import Button from "../Button";

var divStyle = {
  width: "200px"
};

// Button section
storiesOf("Button", module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false
    }
  })
  .add("show normal Button", () => (
    <div style={divStyle}>
      <Button submitted={false} success="wait" />
    </div>
  ))
  .add("show submitted Button", () => (
    <div style={divStyle}>
      <Button submitted={true} success="wait" />
    </div>
  ))
  .add("show success Button", () => (
    <div style={divStyle}>
      <Button Button submitted={true} success="yes" />{" "}
    </div>
  ))
  .add("show failed Button", () => (
    <div style={divStyle}>
      <Button Button submitted={true} success="no" />
    </div>
  ));
