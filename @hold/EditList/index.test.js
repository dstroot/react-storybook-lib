import React from "react";
import renderer from "react-test-renderer";

import NewsList from "../NewsList";

import firebasemock from "firebase-mock";
let mockfirestore = new firebasemock.MockFirestore();
var mocksdk = new firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => {
    return null;
  },
  // use null if your code does not use AUTHENTICATION
  () => {
    return null;
  },
  // use null if your code does not use FIRESTORE
  () => {
    return mockfirestore;
  },
  // use null if your code does not use STORAGE
  () => {
    return null;
  },
  // use null if your code does not use MESSAGING
  () => {
    return null;
  }
);

jest.mock("../../firebase", () => {
  return mocksdk;
});

test("NewsList renders some content", () => {
  const component = renderer.create(<NewsList />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
