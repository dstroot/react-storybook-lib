import React from "react";
import renderer from "react-test-renderer";
import Video from "../Video";

describe("Video", () => {
  it("it should render", () => {
    const component = renderer.create(
      <Video
        videoURL="//videos.ctfassets.net/uw229zq1tzc4/3CYVQZf6e4EyACIEEKOaio/867dda9b5beb1b7d8f1c34261029b02a/HiRes_CC_Text_Removed.mp4"
        poster="//images.ctfassets.net/uw229zq1tzc4/6mhWavUAFUGrfKwkylCPqM/c2dcbb66c2959c1fe8164cf779d3302b/home-hero-poster-image.jpg"
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
