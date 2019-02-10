// yarn add react-fb-image-grid

import React from 'react';
import FbImageLibrary from 'react-fb-image-grid';
// import PropTypes from 'prop-types';

// images
import img1 from './media/1.jpg';
import img2 from './media/2.jpg';
import img3 from './media/3.jpg';
import img4 from './media/4.webp';
import img5 from './media/5.webp';
import img6 from './media/6.jpg';
import img7 from './media/7.jpg';
import img8 from './media/home.jpg';
import img9 from './media/startup.jpg';

// image array
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const ImageDisplay = () => {
  return <FbImageLibrary hideOverlay images={images} />;
};

// ImageDisplay.propTypes = {
//   image: PropTypes.array.isRequired,
// };

export default ImageDisplay;
