import React from 'react';
import renderer from 'react-test-renderer';
import FetchHooks from '../FetchHooks';

describe('FetchHooks', () => {
  it('it should render', () => {
    const component = renderer.create(<FetchHooks />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
