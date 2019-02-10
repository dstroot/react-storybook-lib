import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import Video from '../Video';

// Video section
storiesOf('Video', module).add('show Video', () => (
  <Video videoURL="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4" />
));
