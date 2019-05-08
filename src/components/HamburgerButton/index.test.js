import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import HamburgerButton from '../HamburgerButton';

const mockToggler = jest.fn();

describe('HamburgerButton', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <HamburgerButton clicked={false} toggler={mockToggler} />
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render `unclicked`', () => {
    let tree = create(
      <HamburgerButton clicked={false} toggler={mockToggler} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('it should render `clicked`', () => {
    let tree = create(<HamburgerButton clicked={true} toggler={mockToggler} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('it should contain an svg', () => {
    const svg = getMountedComponent()
      .find('svg')
      .first();

    expect(svg.length).toBe(1);
  });
});
