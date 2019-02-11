import React from "react";
import renderer from "react-test-renderer";

import ShowArticle from "../ShowArticle";

test("ShowArticle renders some content", () => {
  const component = renderer.create(<ShowArticle />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
