import React from "react";
import { storiesOf } from "@storybook/react";

// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// Font Awesome
// https://fontawesome.com/icons?d=gallery
// https://github.com/FortAwesome/react-fontawesome
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faCheck,
  faCheckCircle,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

// our main css
import "../scss/main.scss";

// library of Font Awesome Icons
library.add(faSpinner, faCheck, faCheckCircle, faExclamationTriangle);

/**
 * STORIES
 */

storiesOf("Welcome", module)
  .addParameters({
    info: {
      disable: true
    }
  })
  .add("to Storybook", () => (
    <div>
      <h1 className="display-4">Welcome to our storybook!</h1>
    </div>
  ));
