import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Meta, Story, Props } from '@storybook/addon-docs/blocks';
// import { Meta } from '@storybook/addon-docs/blocks';

// components
import Cards from '../Cards';

// Cards section
storiesOf('Pac Life|Cards', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show Cards', () => <Cards />);
