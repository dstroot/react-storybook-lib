import React from 'react';
import renderer from 'react-test-renderer';
import Cards from '../Cards';

describe('Cards', () => {
  it('it should render', () => {
    const component = renderer.create(<Cards />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
