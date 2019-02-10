import React from 'react';
import renderer from 'react-test-renderer';
import MarketingBing from '../MarketingBing';

describe('MarketingBing', () => {
  it('it should render', () => {
    const component = renderer.create(
      <MarketingBing
        index="1"
        lead="Our Commitments"
        text="We are dedicated to creating opportunity for everyone"
        cta="How we contribute"
        url="/"
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
