import React from 'react';
import renderer from 'react-test-renderer';

import If from '.';

const IsTrue = () => <div>This rendes when true!</div>;

const IsFalse = () => <div>This rendes when false!</div>;

test('If renders when true', () => {
  const component = renderer.create(
    <If condition={true} otherwise={<IsFalse />}>
      <IsTrue />
    </If>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('If renders when false', () => {
  const component = renderer.create(
    <If condition={false} otherwise={<IsFalse />}>
      <IsTrue />
    </If>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
