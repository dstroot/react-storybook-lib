import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import ImageList from '../ImageList';
// import data from "./images.json";

// images
import image1 from './media/logo.png';
import image2 from './media/whale1.jpg';
import image3 from './media/whale2.jpg';

const data = [
  {
    id: '1',
    date: '11-14-18',
    full: image1,
    thumb: image1,
    title: 'Pacific Life Logo',
    caption: '',
    alt: 'logo',
    description: 'Pacific Life Logo',
    category: 'Logos',
  },
  {
    id: '2',
    date: '11-14-18',
    alt: 'whale',
    full: image2,
    thumb: image2,
    title: 'Whale Breach',
    description: '',
    category: 'Images',
  },
  {
    id: '3',
    date: '11-14-18',
    alt: 'whale',
    full: image3,
    thumb: image3,
    title: 'Whale Breach Two',
    description:
      'Pacific Life Foundation Donates $250,000 to the American Red Cross for Victims of the California Wildfires',
    category: 'Images',
  },
];

// ImageList section
storiesOf('Pac Life|ImageList', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show ImageList', () => <ImageList data={data} />);
