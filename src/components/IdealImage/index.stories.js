import React from 'react';
import { storiesOf } from '@storybook/react';

// component
import IdealImage from '../IdealImage';

// story
storiesOf('Misc|IdealImage', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `
        This component requires external libraries:

        ~~~js
        $ yarn add react-ideal-image react-waypoint
        ~~~

        More info: https://github.com/stereobooster/react-ideal-image/blob/master/introduction.md
      `,
    },
  })
  .add('show IdealImage with test image', () => <IdealImage />);
