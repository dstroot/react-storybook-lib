import React from 'react';
import Toggle from '../Toggle';
import renderer from 'react-test-renderer';

// don't do this - its just to make Toggle render
let value = true;
const toggle = () => {
  value = !value;
};

test('Toggle renders a toggle switch - OFF', () => {
  const component = renderer.create(
    <Toggle isOn={false} handleToggle={toggle} onColor="blue" />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Toggle renders a toggle switch - ON', () => {
  const component = renderer.create(
    <Toggle isOn={true} handleToggle={toggle} onColor="blue" />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
