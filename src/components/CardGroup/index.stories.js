import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import CardGroup from '../CardGroup';

// CardGroup section
storiesOf('Pac Life|CardGroup', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show CardGroup', () => <CardGroup />);
