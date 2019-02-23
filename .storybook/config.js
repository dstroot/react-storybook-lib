import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';

// Get stories
const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  require('../src/stories'); // from setup
  req.keys().forEach(filename => req(filename)); // from components
}

// NOTE: It is important to declare "withInfo" as the first decorator
//       (https://github.com/storybooks/storybook/tree/master/addons/info)

// Global decorators
addDecorator(withInfo());
addDecorator(checkA11y);
addDecorator(
  withOptions({
    name: 'Our Library',
    // url: 'https://test.com',
    // goFullScreen: false,
    // showLeftPanel: true,
    // showDownPanel: true,
    // showSearchBox: false,
    // downPanelInRight: true,
    // sortStoriesByKind: true,
  })
);

configure(loadStories, module);
