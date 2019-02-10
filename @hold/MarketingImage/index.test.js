import React from 'react';
import renderer from 'react-test-renderer';
import MarketingImage from '../MarketingImage';

describe('MarketingBing', () => {
  it('it should render', () => {
    const component = renderer.create(
      <MarketingImage
        lead="Our Commitments"
        text="We are dedicated to creating opportunity for everyone"
        image="/media/1.jpg"
        url="/"
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
