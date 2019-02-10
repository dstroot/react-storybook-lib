import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import FetchDemo from '../FetchDemo';

// FetchDemo section
storiesOf('FetchDemo', module).add('show FetchDemo', () => (
  <FetchDemo subreddit="reactjs" />
));
