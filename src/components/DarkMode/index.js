import React from 'react';
import './styles.scss';

/**
 * DarkMode!
 * https://timellenberger.com/blog/operating-system-dark-mode-in-your-css?utm_source=share&utm_medium=ios_app
 * https://timellenberger.com/blog/dynamic-theming-with-styled-components-and-nextjs
 */

class DarkMode extends React.Component {
  state = {
    supportsColorScheme: false,
    isDarkMode: false,
    isLightMode: false,
  };

  componentDidMount() {
    const supportsColorScheme = window.matchMedia('(prefers-color-scheme)')
      .matches;
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;
    const isLightMode = window.matchMedia('(prefers-color-scheme: light)')
      .matches;
    this.setState({ supportsColorScheme, isDarkMode, isLightMode });
  }

  render() {
    const { supportsColorScheme, isDarkMode, isLightMode } = this.state;
    if (supportsColorScheme) {
      if (isDarkMode)
        return (
          <div className="bg-dark p-5">
            <p className="text-white">Your system is in dark mode!</p>
          </div>
        );
      if (isLightMode)
        return (
          <div className="bg-light p-5">
            <p className="text-black">Your system is in dark mode!</p>
          </div>
        );

      // The browser supports light/dark mode but can't infer anything from the system
      return <>Your system light/dark mode preference is unset!</>;
    }

    // The browser doesn't support light/dark mode
    return <>Your browser doesn&apos;t support dark mode!</>;
  }
}

export default DarkMode;

/*

// The browser supports prefers-color-scheme,
// but cannot find a light/dark preference 
@media (prefers-color-scheme: no-preference) {
  background: black;
  color: white;
}

// Use dark mode
@media (prefers-color-scheme: dark) {
  background: black;
  color: white;
}

// Use light mode 
@media (prefers-color-scheme: light) {
  background: white;
  color: black;
}

*/
