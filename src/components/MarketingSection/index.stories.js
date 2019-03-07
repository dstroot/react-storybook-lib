import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import MarketingSection from '../MarketingSection';

// MarketingSection section
storiesOf('Pac Life|MarketingSection', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show MarketingSection', () => <MarketingSection />);
