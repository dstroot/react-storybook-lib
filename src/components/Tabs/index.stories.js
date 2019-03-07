import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import Tabs from '../Tabs';

// Tabs section
storiesOf('Pac Life|Tabs', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show Tabs', () => <Tabs />);
