import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import SocialMedia from '../SocialMedia';

// SocialMedia section
storiesOf('Pac Life|SocialMedia', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show SocialMedia', () => <SocialMedia size="40px" color="#414141" />);
