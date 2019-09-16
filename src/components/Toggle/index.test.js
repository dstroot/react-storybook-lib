import React, { useState } from 'react';
import Toggle from '../Toggle';
import renderer from 'react-test-renderer';

test('Toggle renders a toggle switch', () => {
  const [value, setValue] = useState(false);

  const component = renderer.create(
    <Toggle isOn={false} handleToggle={() => setValue(!value)} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
