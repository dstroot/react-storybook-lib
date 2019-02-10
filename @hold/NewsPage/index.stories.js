import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import NewsPage from '../NewsPage';

// NewsPage section
storiesOf('NewsPage', module).add('show NewsPage', () => <NewsPage />);
