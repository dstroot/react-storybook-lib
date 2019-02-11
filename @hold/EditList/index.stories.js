import React from "react";
import { storiesOf } from "@storybook/react";

// components
import NewsList from "../NewsList";

// NewsList section
storiesOf("NewsList", module).add("show NewsList", () => <NewsList />);
