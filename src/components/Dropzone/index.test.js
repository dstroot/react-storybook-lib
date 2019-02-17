import React from 'react';
import renderer from 'react-test-renderer';

import Dropzone from '../Dropzone';
// import { shallow, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

describe('Dropzone renders', () => {
  it('it should render', () => {
    const component = renderer.create(<Dropzone />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
