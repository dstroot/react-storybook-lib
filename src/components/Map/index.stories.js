import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import Map from '../Map';

// Some default styles
const styles = {
  width: '100%',
  height: '500px',
};

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// Map section
storiesOf('Pac Life|Map', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show Map', () => (
    <Map styles={styles} APIKey={API_KEY} scheme="dark" />
  ));
