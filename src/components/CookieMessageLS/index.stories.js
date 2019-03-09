import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import CookieMessage from '../CookieMessageLS';

// CookieMessage section
storiesOf('Pac Life|CookieMessageLS', module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false,
      text: `
        Example component to show a cookie message with local storage.
    `,
    },
  })
  .add('show CookieMessageLS', () => <CookieMessage />);
