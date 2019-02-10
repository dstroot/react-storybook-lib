import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import Toast from '../Toast';

// Toast section
storiesOf('Toast', module).add('show Toast', () => <Toast />);
