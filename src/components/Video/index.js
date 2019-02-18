import React from "react";
// import poster from "../img/video-placeholder.png";

// https://www.sample-videos.com/
// https://developers.google.com/web/fundamentals/media/video

const style = {
  width: "100%",
  height: "auto"
};

const poster =
  "//images.ctfassets.net/uw229zq1tzc4/6mhWavUAFUGrfKwkylCPqM/c2dcbb66c2959c1fe8164cf779d3302b/home-hero-poster-image.jpg";

const Example = ({ videoURL }) => (
  <video
    style={style}
    id="background-video"
    preload="auto"
    poster={poster}
    loop
    autoPlay
    muted
  >
    {/* List formats in order of preference. */}
    <source src={videoURL} type="video/webm" />
    <source src={videoURL} type="video/mp4" />

    {/* older browser */}
    <p>This browser does not support the video element.</p>
  </video>
);

export default Example;

// <Video videoURL="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" />
