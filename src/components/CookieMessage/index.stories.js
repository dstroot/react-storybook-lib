import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import CookieMessage from '../CookieMessage';

// CookieMessage section
storiesOf('CookieMessage', module).add('show CookieMessage', () => (
  <CookieMessage />
));
