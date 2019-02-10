import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import MarketingImage from '../MarketingImage';
import data from '../MarketingImage/data.json';
import image from './media/1.jpg';

// MarketingImage section
storiesOf('MarketingImage', module)
  .add('show MarketingImage', () => (
    <MarketingImage
      lead="Our Commitments"
      text="We are dedicated to creating opportunity for everyone"
      image={image}
      url="/"
    />
  ))
  .add('show MarketingImage list', () =>
    data.map((record, index) => (
      <MarketingImage
        key={index}
        image={record.image}
        lead={record.lead}
        text={record.text}
        url={record.url}
      />
    ))
  );
