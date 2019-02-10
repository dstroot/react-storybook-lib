import React from 'react';
import renderer from 'react-test-renderer';

// components
import LightboxExample from '../LightboxExample';

// images
import img1 from './media/1.jpg';
import img2 from './media/2.jpg';
import img3 from './media/3.jpg';
import img4 from './media/4.webp';
import img5 from './media/5.webp';
import img6 from './media/6.jpg';

const PHOTO_SET = [
  {
    src: img1,
    width: 2,
    height: 1,
  },
  {
    src: img2,
    width: 1,
    height: 1,
  },
  {
    src: img3,
    width: 1,
    height: 1,
  },
  {
    src: img4,
    width: 2,
    height: 1,
  },
  {
    src: img5,
    width: 2,
    height: 1,
  },
  {
    src: img6,
    width: 2,
    height: 1,
  },
];

describe('LightboxExample', () => {
  it('it should render', () => {
    const component = renderer.create(<LightboxExample photos={PHOTO_SET} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
