import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import Search from '../Search';

// Search section
storiesOf('Pac Life|Search', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show Search', () => <Search />);
