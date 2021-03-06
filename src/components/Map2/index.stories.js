import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import Map2 from '../Map2';

// Map2 section
storiesOf('Pac Life|Map2', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show Map2', () => <Map2 />);
