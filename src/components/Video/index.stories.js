import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

// components
import Video from "../Video";

// Video section
storiesOf("Video", module)
  .addDecorator(withKnobs)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("show Video", () => (
    <Video
      videoURL={text(
        "Video URL",
        "//videos.ctfassets.net/uw229zq1tzc4/3CYVQZf6e4EyACIEEKOaio/867dda9b5beb1b7d8f1c34261029b02a/HiRes_CC_Text_Removed.mp4"
      )}
    />
  ));

//videos.ctfassets.net/uw229zq1tzc4/3CYVQZf6e4EyACIEEKOaio/867dda9b5beb1b7d8f1c34261029b02a/HiRes_CC_Text_Removed.mp4
//www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4
