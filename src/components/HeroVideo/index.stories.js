import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

// components
import HeroVideo from "../HeroVideo";

// HeroVideo section
storiesOf("HeroVideo", module)
  .addDecorator(withKnobs)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("show HeroVideo", () => (
    <HeroVideo
      videoURL={text(
        "Video URL",
        "//videos.ctfassets.net/uw229zq1tzc4/3CYVQZf6e4EyACIEEKOaio/867dda9b5beb1b7d8f1c34261029b02a/HiRes_CC_Text_Removed.mp4"
      )}
      poster={text(
        "Poster",
        "//images.ctfassets.net/uw229zq1tzc4/6mhWavUAFUGrfKwkylCPqM/c2dcbb66c2959c1fe8164cf779d3302b/home-hero-poster-image.jpg"
      )}
    />
  ));
