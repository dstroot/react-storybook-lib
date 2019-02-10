import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import MarketingBing from '../MarketingBing';

// MarketingBing section
storiesOf('MarketingBing', module).add('show MarketingBing', () => (
  <MarketingBing
    index="0"
    lead="Our Commitments"
    text="We are dedicated to creating opportunity for everyone"
    cta="See how we contribute"
    url="/"
  />
));
