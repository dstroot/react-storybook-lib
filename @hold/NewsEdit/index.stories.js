import React from "react";
import { storiesOf } from "@storybook/react";

// components
import NewsEdit from "../NewsEdit";

// NewsEdit section
storiesOf("NewsEdit", module).add("show NewsEdit", () => <NewsEdit />);
