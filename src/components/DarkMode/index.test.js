import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import DarkMode from '../DarkMode';

describe('DarkMode', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<DarkMode />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<DarkMode />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
