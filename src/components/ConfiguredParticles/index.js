import React from "react";
import Particles from "react-particles-js";
import ErrorBoundary from "../../utils/ErrorBoundary";

// styles
import "./styles.scss";

// particles configuration
// https://vincentgarreau.com/particles.js/
import config from "./particles-config.json";

const ConfiguredParticles = () => {
  return (
    <ErrorBoundary>
      <Particles params={config} className={"canvas-container"} />
    </ErrorBoundary>
  );
};

export default ConfiguredParticles;
