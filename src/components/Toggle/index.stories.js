import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

// components
import Toggle from '../Toggle';

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
}

// Button section
storiesOf('VDS|Toggle', module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show toggle off', () => {
    const [isOn, toggleFn] = useToggle(false);
    return <Toggle isOn={isOn} handleToggle={toggleFn} onColor="#EF476F" />;
  })
  .add('show toggle on', () => {
    const [isOn, toggleFn] = useToggle(true);
    return <Toggle isOn={isOn} handleToggle={toggleFn} onColor="#06D6A0" />;
  });
