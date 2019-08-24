import React from 'react';
import IdealImage from 'react-ideal-image';
import image from './media/doggo.jpg';

const ShowIdealImage = () => (
  <IdealImage
    placeholder={{ color: '' }}
    srcSet={[{ src: image, width: 3500 }]}
    alt="doggo"
    width={3500}
    height={2095}
  />
);

export default ShowIdealImage;
