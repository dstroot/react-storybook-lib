import React from 'react';
import { storiesOf } from '@storybook/react';

import If from '.';

const IsTrue = () => <div>This renders when true!</div>;

const IsFalse = () => <div>This renders when false!</div>;

const stories = storiesOf('Pac Life|If', module);

stories
  .add('show false', () => (
    <If condition={false} otherwise={<IsFalse />}>
      <IsTrue />
    </If>
  ))
  .add('show true', () => (
    <If condition={true} otherwise={IsFalse}>
      <IsTrue />
    </If>
  ));
