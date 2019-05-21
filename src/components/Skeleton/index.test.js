import React from 'react';
import { create } from 'react-test-renderer';

import Skeleton from '../Skeleton';

describe('Skeleton', () => {
  it('it should render', () => {
    let tree = create(<Skeleton />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
