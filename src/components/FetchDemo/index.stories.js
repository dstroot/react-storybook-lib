import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import FetchDemo from '../FetchDemo';

// FetchDemo section
storiesOf('API|FetchDemo', module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false,
      text: `
        Fetching data via an API. It uses the reddit API 
        and will get items from a subreddit. The subreddit is passed in as a prop.

        Uses the axios library:

        ~~~js
        $ yarn add axios
        ~~~
    `,
    },
  })
  .add('show FetchDemo', () => <FetchDemo subreddit="reactjs" />);
