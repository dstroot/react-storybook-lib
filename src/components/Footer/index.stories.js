import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import Footer from '../Footer';

// Footer section
storiesOf('Pac Life|Footer', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `
        A simple view-only generic component.  In the real world we would probably pass in the logo and links as props.
      `,
    },
  })
  .add('show Footer', () => <Footer />);
