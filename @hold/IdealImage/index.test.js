import React from 'react';
import renderer from 'react-test-renderer';
import IdealImage from '../IdealImage';

describe('IdealImage', () => {
  it('it should render', () => {
    const component = renderer.create(<IdealImage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
