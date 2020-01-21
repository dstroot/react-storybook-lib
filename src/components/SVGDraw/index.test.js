// After importing the necessary packages, we can write a test which calls
// the render function provided by React Testing Library, which returns an
// object that we can extract asFragment from. Using this we can use the
// built-in functionality from Jest to perform a snapshot test.

import React from 'react';
import { render } from '@testing-library/react';

// component to test
import { SVGDraw } from '.';

// mock intersectionObserver
const observe = jest.fn();
const unobserve = jest.fn();
const disconnect = jest.fn();

window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
  disconnect,
}));

// // mock path length
// const getTotalLength = jest.fn(() => {
//   return 100;
// });
// // getTotalLength.mockReturnValueOnce(100);

// window.SVGPathElement = jest.fn(() => ({
//   getTotalLength,
// }));

// const current = jest.fn();
const getTotalLength = jest.fn();
getTotalLength.mockReturnValue(500);

// // window.SVGPathElement = jest.fn(() => ({
// //   current,
// // }));

window.SVGPathElement = jest.fn(() => ({
  getTotalLength,
}));

// let obj = {
//   SVGPathElement: { getTotalLength: jest.fn() },
// };
// Object.assign(window, obj);

// class SVGPathElement extends HTMLElement {}
// window.SVGPathElement = SVGPathElement;

describe('BackgroundWash', () => {
  it('renders', () => {
    // arange

    // act
    const { asFragment } = render(<SVGDraw />);

    // assert
    expect(asFragment()).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();

    expect(observe).toHaveBeenCalled();
  });
});
