import React, { Suspense } from 'react';
import renderer from 'react-test-renderer';
import NewsContact from '../NewsContact';

describe('NewsContact', () => {
  it('it should render', () => {
    const component = renderer.create(<NewsContact />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
