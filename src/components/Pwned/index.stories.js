import React, { Suspense } from "react";
import { storiesOf } from "@storybook/react";

// components
import Pwned from "../Pwned";

// Pwned section
storiesOf("Pwned", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("show Pwned with simple password", () => (
    <Suspense fallback={<div className="text-muted">Loading...</div>}>
      <Pwned password="1234" />
    </Suspense>
  ))
  .add("show Pwned with complex password", () => (
    <Suspense fallback={<div className="text-muted">Loading...</div>}>
      <Pwned password="kjshf^/@jdiIHdjhf0)" />
    </Suspense>
  ));
