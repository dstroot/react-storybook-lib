import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import HeroTyped from '../HeroTyped';
import image from '../HeroTyped/media/hatch2.jpg';

const stories = storiesOf('Pac Life|HeroTyped', module);
stories.addDecorator(withKnobs);

stories
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `
      This component requires the library "react-typed"

      ~~~js
      yarn add react-typed
      ~~~
      `,
    },
  })
  .add('show example', () => (
    <HeroTyped
      image={image}
      tagline={text('Tagline', 'Hatch Labs')}
      typed={text('Intro', 'Hatch your ')}
      strings={['ideas', 'innovations', 'products', 'solutions']}
    />
  ));
