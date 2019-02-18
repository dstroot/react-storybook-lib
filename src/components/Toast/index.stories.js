import React from "react";
import { storiesOf } from "@storybook/react";

// components
import Toast from "../Toast";

// Toast section
storiesOf("Toast", module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `
      Add the library:

        ~~~sh
        $ yarn add react-notifications-component
        ~~~
      `
    }
  })
  .add("show Toast", () => <Toast />);
