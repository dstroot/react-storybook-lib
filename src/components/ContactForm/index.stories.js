import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import ContactForm from '../ContactForm';

// ContactForm section
storiesOf('ContactForm', module).add('show ContactForm', () => <ContactForm />);
