import React from 'react';
// import poster from "../img/video-placeholder.png";

// https://www.sample-videos.com/
// https://developers.google.com/web/fundamentals/media/video

const Example = ({ videoURL }) => (
  <video id="background-video" preload="auto" loop autoPlay>
    {/* List formats in order of preference. */}
    <source src={videoURL} type="video/webm" />
    <source src={videoURL} type="video/mp4" />
    <p>This browser does not support the video element.</p>
  </video>
);

export default Example;

// <Video videoURL="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" />
