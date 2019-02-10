import React from 'react';
import renderer from 'react-test-renderer';

import Hero from '../Hero';
import image from '../../components/Hero/media/startup.jpg';

test('HeroSection renders some content', () => {
  const component = renderer.create(<Hero image={image} align="left" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
