module.exports = {
  presets: ['@storybook/preset-create-react-app'],
  stories: [
    '../src/components/intro.stories.mdx', // load intro first
    '../src/**/*.stories.(js|mdx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs/preset',
      options: {
        configureJSX: true,
      },
    },
  ],
};

// https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78
