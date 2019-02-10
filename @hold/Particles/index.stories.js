import React from "react";
import { storiesOf } from "@storybook/react";

// components
import ConfiguredParticles from "../Particles";

const style = {
  width: "1000px",
  height: "500px"
};

// ConfiguredParticles section
storiesOf("ConfiguredParticles", module).add("show ConfiguredParticles", () => (
  <div style={style}>
    <ConfiguredParticles />
  </div>
));
