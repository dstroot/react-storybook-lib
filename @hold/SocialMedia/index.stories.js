import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import SocialMedia from '../SocialMedia';

// SocialMedia section
storiesOf('SocialMedia', module).add('show SocialMedia', () => (
  <SocialMedia size="40px" color="#414141" />
));
