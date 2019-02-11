import React from "react";
import renderer from "react-test-renderer";

import NewsForm from "../NewsForm";

const onSubmit = () => {
  return null;
};

const onChange = () => {
  return null;
};

test("NewsForm renders some content", () => {
  const component = renderer.create(
    <NewsForm
      valid={true}
      submitted={false}
      success="yes"
      message="Hello"
      datetime="Dec 25, 2018"
      headline="Headline"
      cutline="cutline"
      story="story"
      category="Company News"
      image="Image"
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
