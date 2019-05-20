import React from 'react';
import { storiesOf } from '@storybook/react';
import Skeleton from '../Skeleton';

const testStyle = {
  height: '50px',
  width: '100%',
};

storiesOf('Misc|Skeleton', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `This supports markdown!
      
      ~~~js
      console.log("hello");
      ~~~
      `,
    },
  })
  .add('show Skeleton', () => (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div style={testStyle}>
            <Skeleton />
          </div>
        </div>
        <div className="col-6">
          <div style={testStyle}>
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  ));
