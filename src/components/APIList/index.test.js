import React from 'react';
import renderer from 'react-test-renderer';
import APIList from '../APIList';

describe('APIList', () => {
  it('it should render', () => {
    const component = renderer.create(
      <APIList url="https://www.dallasopendata.com/resource/f29b-eiwd.json?$limit=20" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
