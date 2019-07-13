import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import HeroWash from '../HeroWash';
import logo from '../HeroWash/media/PacificLife_BrandIcon_White.png';
import image from '../HeroWash/media/2.jpg';

const stories = storiesOf('Pac Life|HeroWash', module);
stories.addDecorator(withKnobs);

stories
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `
      You. Protected.
      Our mission is protecting your financial future.
      We’ve fulfilled that promise for 150 years.
      `,
    },
  })
  .add('show background 1', () => (
    <HeroWash
      logo={logo}
      bgimage={image}
      tagline={text('Tagline', 'Tagline')}
      line1={text('Line 1', 'Some additional text')}
      line2={text('Line 2', 'More additional text')}
    />
  ))
  .add('show background 2', () => (
    <HeroWash
      logo={logo}
      bgimage={text(
        'Background Image',
        'https://www.pacificlife.com/content/dam/paclife/crp/images/brand/Brand_hero.jpg'
      )}
      tagline={text('Tagline', 'Tagline')}
      line1={text('Line 1', 'Some additional text')}
      line2={text('Line 2', 'More additional text')}
    />
  ));
