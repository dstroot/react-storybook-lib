import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import NewsArticle from '../NewsArticle';

// NewsArticle section
storiesOf('NewsArticle', module).add('show NewsArticle', () => <NewsArticle />);
