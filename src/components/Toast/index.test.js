import React from 'react';
import renderer from 'react-test-renderer';

import Toast from '../Toast';

test('Toast renders the toast page', () => {
  const component = renderer.create(<Toast />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
