import React from 'react';
import renderer from 'react-test-renderer';
import MarketingSection from '../MarketingSection';

describe('MarketingSection', () => {
  it('it should render', () => {
    const component = renderer.create(<MarketingSection />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
