import React from 'react';
import { storiesOf } from '@storybook/react';

// component
import IdealImage from '../IdealImage';

// story
storiesOf('IdealImage', module).add('show IdealImage with test image', () => (
  <IdealImage />
));
