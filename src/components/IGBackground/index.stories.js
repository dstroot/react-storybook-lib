import React from 'react';
import styled from 'styled-components';

// components
import IGBackground from '../IGBackground';
// import Splash from './components/Splash';

export default {
  title: 'Pac Life/Instagram Background',
  component: IGBackground,
};

export const example = () => {
  return (
    <Main>
      <IGBackground
        username="ferrytalecreative"
        filterOpts={['to bottom right', 'teal', 'blue', 'purple']}
      />
      <Fence>
        {/* <Splash /> */}
        <Spacer />
      </Fence>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Fence = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
`;

const Spacer = styled.div`
  flex: 1;
`;
