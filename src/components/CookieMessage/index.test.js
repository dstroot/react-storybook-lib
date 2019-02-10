import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import CookieMessage from '../CookieMessage';

describe('CookieMessage', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<CookieMessage />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    const component = renderer.create(<CookieMessage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should be at the bottom of the page', () => {
    expect(
      getMountedComponent()
        .find('div')
        .first()
        .hasClass('fixed-bottom')
    ).toBe(true);
  });

  it('it should contain the expected text', () => {
    const tableCell = getMountedComponent()
      .find('td')
      .first();
    expect(tableCell.text()).toContain(
      'We use cookies to understand the performance of our web site, enable social media features, and serve more relevant content to you. We may also use cookies on our and our partners’ behalf to help us manage advertising and assess the performance of our campaigns. For further information please see our'
    );
  });

  it('it should have a link to /cookiepolicy', () => {
    const link = getMountedComponent().find("[href='/cookiepolicy']");
    expect(link.length).toBeGreaterThan(0);
    // console.log(link.debug());
  });

  it('it should have a button that says "I agree"', () => {
    const button = getMountedComponent().find('button');
    expect(button.text()).toContain('I Agree');
  });

  it('it should disappear when the button is clicked', () => {
    let div = getMountedComponent()
      .find('div')
      .first();
    expect(div.length).toBeGreaterThan(0);

    // now click the button
    const button = getMountedComponent().find('button');
    button.simulate('click');

    // div should be gone
    div = getMountedComponent()
      .find('div')
      .first();
    expect(div.length).toBe(0); // doesn't exist anymore
  });
});

// Testing information
// ---------------------------------------------------
// Jest - Expect: https://jestjs.io/docs/en/expect
// https://jestjs.io/docs/en/expect.html#content
// Enzyme cheatsheet - https://devhints.io/enzyme

// https://medium.com/@stipsan/testing-with-jest-15-awesome-tips-and-tricks-42150ec4c262
// https://www.youtube.com/watch?time_continue=459&v=XUlGzJLZe2Q
// https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22
// https://blog.pragmatists.com/click-your-element-how-to-make-enzyme-tests-cleaner-3e7ad21c2be0
// https://blog.bitsrc.io/how-to-test-react-components-with-jest-and-enzyme-in-depth-145fcd06b90
// https://medium.com/front-end-hacking/tested-react-lets-build-a-data-table-a76aa100d23f

// Component Contracts
// --------------------------------------------------
// In order to test a component you must first understand what its
// Contract is. Understanding a component’s contract is the most important
// part of testing a React component. A contract defines the expected behavior
// of your component and what assumptions are reasonable to have about its
// usage. Without a clear contract, your component may be hard to understand.
// Writing tests is a great way to formally define your component’s contract.

// Every React component has at least one thing that contributes to the
// definition of its contract:

// - What it renders (which may be nothing)
//
// Additionally, most component contracts are affected by these things as well:
//
// - The props the component receives
// - The state the component holds (if any)
// - What the component does when the user interacts with it
//   (via clicking, dragging, keyboard input, etc)
