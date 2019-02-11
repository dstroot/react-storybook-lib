import React from "react";
import renderer from "react-test-renderer";

import NewsEdit from "../NewsEdit";

test("NewsEdit renders some content", () => {
  const component = renderer.create(<NewsEdit />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
