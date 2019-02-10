import React, { Suspense } from 'react';
import renderer from 'react-test-renderer';
import NewsList from '../NewsList';

describe('NewsList', () => {
  it('it should render', () => {
    const component = renderer.create(<NewsList />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
