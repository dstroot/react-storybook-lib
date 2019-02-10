import React from 'react';
import renderer from 'react-test-renderer';
import RenderMarkdown from '../RenderMarkdown';

const testData = `## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

Pretty neat, eh?
`;

describe('RenderMarkdown', () => {
  it('it should render', () => {
    const component = renderer.create(<RenderMarkdown markdown={testData} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
