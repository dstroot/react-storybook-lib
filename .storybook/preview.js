import React from 'react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

// Font Awesome
// https://fontawesome.com/icons?d=gallery
// https://github.com/FortAwesome/react-fontawesome
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faCheck,
  faCheckCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

// our main css
import '../src/scss/main.scss';

// library of Font Awesome Icons
library.add(faSpinner, faCheck, faCheckCircle, faExclamationTriangle);

// this is for styled components
// import { GlobalStyle } from "../src/shared/global";

addDecorator(withA11y);

// // this is for styled components
// addDecorator(story => (
//   <>
//     <GlobalStyle />
//     {story()}
//   </>
// ));
