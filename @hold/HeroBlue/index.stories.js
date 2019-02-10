import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import HeroBlue from '../HeroBlue';

// images
// import image1 from './media/1.jpg';
import image2 from './media/2.jpg';
import image3 from './media/3.jpg';
import image4 from './media/startup.jpg';
import image5 from './media/home.jpg';

storiesOf('HeroBlue', module)
  .add('show HeroBlue image 1', () => (
    <HeroBlue
      align="right"
      image="https://www.pacificlife.com/content/dam/paclife/crp/images/brand/Brand_hero.jpg"
      tagline="You. Protected."
      text="Our mission is protecting your financial future. For 150 years, we’ve fulfilled that promise."
    />
  ))
  .add('show HeroBlue image 2', () => (
    <HeroBlue
      align="left"
      image={image2}
      tagline="You. Protected."
      text="Our mission is protecting your financial future. For 150 years, we’ve fulfilled that promise."
    />
  ))
  .add('show HeroBlue image 3', () => (
    <HeroBlue
      image={image3}
      align="center"
      tagline="You. Protected."
      text="Our mission is protecting your financial future. For 150 years, we’ve fulfilled that promise."
    />
  ))
  .add('show HeroBlue image 4', () => (
    <HeroBlue
      image={image4}
      align="right"
      tagline="You. Protected."
      text="Our mission is protecting your financial future. For 150 years, we’ve fulfilled that promise."
    />
  ))
  .add('show HeroBlue image 5', () => (
    <HeroBlue
      image={image5}
      align="center"
      tagline="You. Protected."
      text="Our mission is protecting your financial future. For 150 years, we’ve fulfilled that promise."
    />
  ));
