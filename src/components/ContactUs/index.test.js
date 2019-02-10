import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactUs from '../ContactUs';

describe('ContactUs', () => {
  it('it should render', () => {
    const component = renderer.create(
      <Router>
        <ContactUs />
      </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
