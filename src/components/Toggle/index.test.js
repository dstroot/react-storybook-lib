import React, { useState } from 'react';
import Toggle from '../Toggle';
import renderer from 'react-test-renderer';

test('Toggle renders a toggle switch', () => {

  const component = renderer.create(
    const [value, setValue] = useState(false);
    <Toggle isOn={false} handleToggle={() => setValue(!value)} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
