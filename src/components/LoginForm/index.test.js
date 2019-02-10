import React from 'react';
import renderer from 'react-test-renderer';

// components
import LoginForm from '../LoginForm';
import picture from './media/1.jpg';

describe('LoginForm', () => {
  it('it should render', () => {
    const component = renderer.create(<LoginForm image={picture} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
