import React from 'react';
import renderer from 'react-test-renderer';

import ContactFormHooks from '../ContactFormHooks';

test('ContactFormHooks renders some content', () => {
  const component = renderer.create(<ContactFormHooks />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
