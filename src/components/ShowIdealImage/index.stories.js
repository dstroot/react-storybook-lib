import React from 'react';
import { storiesOf } from '@storybook/react';

// component
import ShowIdealImage from '../ShowIdealImage';

// story
storiesOf('Misc|IdealImage', module).add(
  'show IdealImage with test image',
  () => <ShowIdealImage />
);
