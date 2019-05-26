import React from 'react';

/**
 * The react-testing-library is a very lightweight solution for testing React components.
 * It provides light utility functions on top of react-dom and react-dom/test-utils,
 * in a way that encourages better testing practices.
 */

// React test library
import { render, fireEvent, cleanup } from 'react-testing-library';
// Custom jest matchers from jest-dom
import 'jest-dom/extend-expect';

// component to test
import CookieMessageRTL from '../CookieMessageRTL';

// automatically unmount and cleanup DOM after each test is finished.
afterEach(cleanup);

// tests
describe('CookieMessageRTL', () => {
  it('it should render', () => {
    /**
     * By default, react-testing-library will create a div and
     * append that div to the document.body and this is where
     * your react component will be rendered.
     */
    const { container } = render(<CookieMessageRTL />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('it should be at the bottom of the page', () => {
    const { getByTestId } = render(<CookieMessageRTL />);
    expect(getByTestId('cookie-message')).toHaveClass('fixed-bottom bg-dark');
  });

  it('it should contain the expected text', () => {
    const { getByText } = render(<CookieMessageRTL />);
    const element = getByText(
      `We use cookies to understand the performance of our web site, enable social media features, and serve more relevant content to you. We may also use cookies on our and our partners’ behalf to help us manage advertising and assess the performance of our campaigns. For further information please see our`,
      { exact: false }
    );
    expect(element).toBeInTheDocument();
  });

  it('it should have a link to /cookiepolicy', () => {
    const { getByTitle } = render(<CookieMessageRTL />);
    expect(getByTitle('Cookie Policy.')).toBeInTheDocument();
  });

  it('it should have a button that says "I agree"', () => {
    const { getByText } = render(<CookieMessageRTL />);
    const button = getByText('I Agree');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn');
  });

  it('it should disappear when the button is clicked', () => {
    // setup
    const { getByText, container } = render(<CookieMessageRTL />);

    // assert - componment exists
    expect(container.firstChild).toBeInTheDocument();

    // action - click button
    const button = getByText('I Agree');
    fireEvent.click(button);

    // assert - component no longer exists in DOM
    expect(container.firstChild).toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });
});

/**
 * Custom matchers:
 *   - toBeDisabled
 *   - toBeEnabled
 *   - toBeEmpty
 *   - toBeInTheDocument
 *   - toBeInvalid
 *   - toBeRequired
 *   - toBeValid
 *   - toBeVisible
 *   - toContainElement
 *   - toContainHTML
 *   - toHaveAttribute
 *   - toHaveClass
 *   - toHaveFocus
 *   - toHaveFormValues
 *   - toHaveStyle
 *   - toHaveTextContent
 */

/**
  * Based on the Guiding Principles, your test should resemble how users 
  * interact with your code (component, page, etc.) as much as possible. 
  * With this in mind, we recommend this order of priority:

  * Queries Accessible to Everyone queries that reflect the experience 
  * of visual/mouse users as well as those that use assistive technology
  * 
  * **getByLabelText**: Only really good for form fields, but this is the 
  * number one method a user finds those elements, so it should be your top preference.
  * 
  * **getByPlaceholderText**: A placeholder is not a substitute for a label. But if 
  * that's all you have, then it's better than alternatives.
  * 
  * getByText: Not useful for forms, but this is the number 1 method a user 
  * finds other elements (like buttons to click), so it should be your top 
  * preference for non-form elements.
  * 
  * getByDisplayValue: The current value of a form element can be useful when 
  * navigating a page with filled-in values.
  * 
  * Semantic Queries HTML5 and ARIA compliant selectors. Note that the user 
  * experience of interacting with these attributes varies greatly across 
  * browsers and assistive technology.
  * 
  * **getByAltText**: If your element is one which supports alt text (img, area, 
  * and input), then you can use this to find that element.
` *`
  * **getByTitle**: The title attribute is not consistently read by screenreaders, 
  * and is not visible by default for sighted users.
  * 
  * **getByRole**: This can be used to select dialog boxes and other 
  * difficult-to-capture elements in a more semantic way
  * 
  * Test IDs
  * 
  * **getByTestId**: The user cannot see (or hear) these, so this is only 
  * recommended for cases where you can't match by text or it doesn't make 
  * sense (the text is dynamic).
  */
