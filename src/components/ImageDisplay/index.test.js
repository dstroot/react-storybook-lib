import React from 'react';
import renderer from 'react-test-renderer';

import ImageDisplay from '../ImageDisplay';

test('ImageDisplay renders some content', () => {
  const component = renderer.create(<ImageDisplay />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
