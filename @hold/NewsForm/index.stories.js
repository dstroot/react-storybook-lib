import React from "react";
import { storiesOf } from "@storybook/react";

// components
import NewsForm from "../NewsForm";

// NewsForm section
storiesOf("NewsForm", module).add("show NewsForm", () => <NewsForm />);
