import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import CookieMessageRTL from '../CookieMessageRTL';

// CookieMessageRTL section
storiesOf('Pac Life|CookieMessageRTL', module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false,
      text: `
        Example component to show a cookie message.
    `,
    },
  })
  .add('show CookieMessageRTL', () => <CookieMessageRTL />);
