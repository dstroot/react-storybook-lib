import React from "react";
import renderer from "react-test-renderer";

import HeroBlue from "../HeroBlue";
import image from "../../components/HeroBlue/media/startup.jpg";

test("HeroBlue renders some content", () => {
  const component = renderer.create(
    <HeroBlue image={image} tagline="It's Miller Time!" />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
