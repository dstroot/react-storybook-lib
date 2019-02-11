import React from "react";
import { storiesOf } from "@storybook/react";

// components
import NewsCreate from "../NewsCreate";

// NewsCreate section
storiesOf("NewsCreate", module).add("show NewsCreate", () => <NewsCreate />);
