import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import Hero from '../Hero';

// images
import image1 from './media/1.jpg';
import image2 from './media/2.jpg';
import image3 from './media/3.jpg';
import image4 from './media/startup.jpg';
import image5 from './media/home.jpg';

storiesOf('Pac Life|Hero', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `
      A simple hero component. 
    `,
    },
  })
  .add('show Hero image (right text)', () => (
    <Hero
      align="right"
      image={image1}
      text="Achieve your most important financial goals with Pacific Life"
    />
  ))
  .add('show Hero image (left text)', () => (
    <Hero
      align="left"
      image={image2}
      text="Achieve your most important financial goals with Pacific Life"
    />
  ))
  .add('show Hero image (center text)', () => (
    <Hero
      image={image3}
      align="center"
      tagline="The Power of Pacific Life"
      text="Achieve your most important financial goals with Pacific Life"
    />
  ))
  .add('show Hero image (quote, right)', () => (
    <Hero
      image={image4}
      align="right"
      tagline="The Power of Pacific Life"
      text="Achieve your most important financial goals with Pacific Life"
      attribution=" - Jim Morris"
    />
  ))
  .add('show Hero image (center text', () => (
    <Hero
      image={image5}
      align="center"
      tagline="The Power of Pacific Life"
      text="Achieve your most important financial goals with Pacific Life"
    />
  ));
