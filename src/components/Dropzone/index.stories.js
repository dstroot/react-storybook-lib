import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// components
import Dropzone from '../Dropzone';

// Dropzone section
storiesOf('Misc|Dropzone', module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false,
      text: `
        Dropzone - drag and drop files to upload them.

        ##### References

        - https://malcoded.com/posts/react-dropzone
        - https://upmostly.com/tutorials/react-dropzone-file-uploads-react/
    `,
    },
  })
  .add('show Dropzone', () => <Dropzone onFilesAdded={action(console.log)} />);
