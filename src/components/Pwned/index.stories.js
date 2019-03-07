import React, { Suspense } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// components
import Pwned from '../Pwned';

// stories with knobs
const stories = storiesOf('Misc|Pwned', module);
stories.addDecorator(withKnobs);

// Pwned section
stories
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show Pwned with simple password', () => (
    <Suspense fallback={<div className="text-muted">Loading...</div>}>
      <Pwned password={text('Password', '1234')} />
    </Suspense>
  ))
  .add('show Pwned with complex password', () => (
    <Suspense fallback={<div className="text-muted">Loading...</div>}>
      <Pwned password={text('Password', 'kjshf^/@jdiIHdjhf0')} />
    </Suspense>
  ));
