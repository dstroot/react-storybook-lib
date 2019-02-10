import React from "react";
import FbImageLibrary from "react-fb-image-grid";
import PropTypes from "prop-types";

/** 
This component requires an external library. 
NOTE: `yarn add react-fb-image-grid`
 */
const ImageDisplay = ({ images }) => {
  return <FbImageLibrary hideOverlay images={images} />;
};

ImageDisplay.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageDisplay;
