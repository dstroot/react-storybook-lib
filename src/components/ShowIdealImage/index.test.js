import React from 'react';
import renderer from 'react-test-renderer';

import ShowIdealImage from '.';

describe('ShowIdealImage', () => {
  it('it should render', () => {
    const component = renderer.create(<ShowIdealImage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
