import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import ConfiguredParticles from '../ConfiguredParticles';

const style = {
  width: '500px',
  height: '500px',
};

// ConfiguredParticles section
storiesOf('VDS|ConfiguredParticles', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show ConfiguredParticles', () => (
    <div style={style}>
      <ConfiguredParticles />
    </div>
  ));
