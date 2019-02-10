import React from 'react';
import renderer from 'react-test-renderer';

import Pricing from '../Pricing';

describe('Pricing', () => {
  it('it should render', () => {
    const component = renderer.create(<Pricing />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
