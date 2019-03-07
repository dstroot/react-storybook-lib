import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// components
import MarketingImage from '../MarketingImage';
// import data from '../MarketingImage/data.json';
import image from './media/1.jpg';

const stories = storiesOf('Pac Life|MarketingImage', module);
stories.addDecorator(withKnobs);

// MarketingImage section
stories
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show MarketingImage', () => (
    <MarketingImage
      lead={text('lead', 'Our Commitments')}
      text={text(
        'subtext',
        'We are dedicated to creating opportunity for everyone'
      )}
      image={image}
      url="/"
    />
  ));
// .add('show MarketingImage list', () =>
//   data.map((record, index) => (
//     <MarketingImage
//       key={index}
//       image={record.image}
//       lead={record.lead}
//       text={record.text}
//       url={record.url}
//     />
//   ))
// );
