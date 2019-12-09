import React from 'react';
import renderer from 'react-test-renderer';

import SubscribeCard from '../SubscribeCard';

describe('SubscribeCard', () => {
  it('it should render', () => {
    const component = renderer.create(<SubscribeCard />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
