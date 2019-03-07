import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import LoginForm from '../LoginForm';
import picture from './media/1.jpg';

// LoginForm section
storiesOf('Misc|LoginForm', module).add('show LoginForm', () => (
  <LoginForm image={picture} />
));
