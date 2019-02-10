import React from 'react';
import renderer from 'react-test-renderer';
import SocialMedia from '../SocialMedia';

describe('SocialMedia', () => {
  it('it should render', () => {
    const component = renderer.create(<SocialMedia />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
