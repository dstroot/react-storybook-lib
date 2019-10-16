import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Meta, Story, Props } from '@storybook/addon-docs/blocks';
// import { Meta } from '@storybook/addon-docs/blocks';

// components
import SubscribeCard from '../SubscribeCard';

// SubscribeCard section
storiesOf('Pac Life|SubscribeCard', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show SubscribeCard', () => <SubscribeCard />);
