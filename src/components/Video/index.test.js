import React from 'react';
import renderer from 'react-test-renderer';
import Video from '../Video';

describe('Video', () => {
  it('it should render', () => {
    const component = renderer.create(
      <Video videoURL="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
