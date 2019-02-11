import React from 'react';
import renderer from 'react-test-renderer';

import Tabs from '../Tabs';

describe('Tabs', () => {
  it('it should render', () => {
    const component = renderer.create(<Tabs />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
