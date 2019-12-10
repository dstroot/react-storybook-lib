import React from 'react';
import IdealImage from 'react-ideal-image';
import image from './media/doggo.jpg';

// import lqip from 'lqip.macro';

// lqip = lqip('./media/doggo.jpg');

// const App = () => (
//   <IdealImage
//     placeholder={{ lqip }}
//     srcSet={[{ src: image, width: 3500 }]}
//     alt="doggo"
//     width={3500}
//     height={2095}
//   />
// );

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
