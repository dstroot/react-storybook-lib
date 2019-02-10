/**
 * This component uses a componenet to load and display images
 *
 * It requires external libraries:
 * `yarn add react-ideal-image react-waypoint`
 */

import React from 'react';
import IdealImage from 'react-ideal-image';
import image from './media/doggo.jpg';

// https://github.com/stereobooster/react-ideal-image/blob/master/introduction.md
const Image = () => (
  <IdealImage
    placeholder={{ color: '' }}
    srcSet={[{ src: image, width: 3500 }]}
    alt="doggo"
    width={3500}
    height={2095}
  />
);

export default Image;
