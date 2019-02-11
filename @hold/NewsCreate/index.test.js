import React from "react";
import renderer from "react-test-renderer";

import NewsCreate from "../NewsCreate";

import { advanceTo, clear } from "jest-date-mock";
beforeEach(() => {
  advanceTo(new Date(2018, 5, 27, 0, 0, 0)); // advanceTo to 0 ms.
});

afterEach(() => {
  clear();
});

test("NewsCreate renders some content", () => {
  const component = renderer.create(<NewsCreate />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
