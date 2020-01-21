import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Our Library',
    // brandUrl: 'https://storybook.js.org',
    // To control appearance:
    // brandImage: 'http://url.of/some.svg',
    gridCellSize: 12,
  }),
  // isFullscreen: false,
  // showPanel: true,
  // panelPosition: 'bottom',
});
