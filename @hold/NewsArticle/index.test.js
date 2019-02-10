import React from 'react';
import renderer from 'react-test-renderer';

import NewsArticle from '../NewsArticle';

describe('NewsArticle', () => {
  it('it should render', () => {
    const component = renderer.create(<NewsArticle />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
