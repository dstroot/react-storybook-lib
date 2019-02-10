import React from "react";
import renderer from "react-test-renderer";

import ImageDisplay from "../ImageDisplay";

// images
import img1 from "./media/1.jpg";
import img2 from "./media/2.jpg";
import img3 from "./media/3.jpg";
import img4 from "./media/4.webp";
import img5 from "./media/5.webp";
import img6 from "./media/6.jpg";
import img7 from "./media/7.jpg";
import img8 from "./media/home.jpg";
import img9 from "./media/startup.jpg";

// image array
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

test("ImageDisplay renders some content", () => {
  const component = renderer.create(<ImageDisplay images={images} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
