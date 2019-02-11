import React from "react";
import PropTypes from "prop-types";

// Import Google Map component
import GoogleMapComponentWithMarker from "./GoogleMap";

// Wrapper with Google Map component
const Map = ({ styles, APIKey, scheme }) => (
  <div style={styles}>
    <GoogleMapComponentWithMarker
      scheme={scheme}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${APIKey}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
);

// note the comments are used for storybook.
Map.propTypes = {
  /** Styles object */
  styles: PropTypes.object.isRequired,
  /** API key for Google maps */
  APIKey: PropTypes.string.isRequired,
  /** Color scheme (light/dark) */
  scheme: PropTypes.string.isRequired
};

export default Map;

// pass in location, styles, API key and scheme {light or dark}
