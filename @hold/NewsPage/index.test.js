import React from 'react';
import renderer from 'react-test-renderer';

import NewsPage from '../NewsPage';

describe('NewsPage', () => {
  it('it should render', () => {
    const component = renderer.create(<NewsPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
