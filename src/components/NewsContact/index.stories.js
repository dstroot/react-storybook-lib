import React, { Suspense } from 'react';
import { storiesOf } from '@storybook/react';

// components
import NewsContact from '../NewsContact';

// NewsContact section
storiesOf('NewsContact', module).add('show NewsContact', () => <NewsContact />);
