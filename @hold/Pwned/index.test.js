import React, { Suspense } from 'react';
import renderer from 'react-test-renderer';
import Pwned from '../Pwned';

describe('Pwned', () => {
  it('it should render', () => {
    const component = renderer.create(
      <Suspense fallback={<div className="text-muted">Loading...</div>}>
        <Pwned password="1234" />
      </Suspense>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
