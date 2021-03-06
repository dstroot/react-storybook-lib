import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import DataVisualization from '../DataVisualization';

// DataVisualization section
storiesOf('Data|DataVisualization', module).add(
  'show DataVisualization',
  () => <DataVisualization />
);
