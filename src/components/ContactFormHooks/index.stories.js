import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import ContactFormHooks from '../ContactFormHooks';

// ContactFormHooks section
storiesOf('VDS|ContactFormHooks', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show ContactFormHooks', () => <ContactFormHooks />);
