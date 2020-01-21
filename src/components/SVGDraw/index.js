import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

// https://dlford.io/draw-animation-svg-react-hooks/

export const SVGDraw = props => {
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  const [pathLength, setPathLength] = useState();
  const pathRef = createRef();

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathRef]);

  return (
    <Wrapper ref={inViewRef} pathLength={pathLength}>
      <svg
        className={inView ? 'animated visible' : 'animated'}
        viewBox="0 0 127.237 53.457"
        {...props}
      >
        <path
          ref={pathRef}
          d="M5.27 7.113l-1.7-4.158S3.475.593 4.23.215c.756-.378 3.78.567 4.158 3.118.378 2.552-.472 6.237-2.551 8.316-2.08 2.079-6.142.189-5.67-.567.472-.756 3.024-5.292 2.079-6.331C1.302 3.71.263 12.877.64 13.255c.378.378 5.009 1.323 6.426.284 1.417-1.04 0-1.323 1.323-1.323s3.969-1.89 4.158-5.386c.189-3.497 1.606.283 1.228 1.606-.378 1.323-.756 3.024.473 4.063 1.228 1.04 3.023-1.228 3.118-2.55.094-1.324 3.213-4.348 2.362-3.12-.85 1.23-2.646 3.12-2.362 4.725.283 1.607 2.646 1.134 2.835.19.189-.945 1.134-6.71 1.04-4.914-.095 1.795-.284 5.008.472 5.291.756.284 1.512.756 2.834-1.417 1.323-2.173 1.89-6.804 1.512-4.441-.378 2.362-1.7 5.291-.567 5.858 1.134.567 2.174-.283 2.646-2.362.473-2.079.945-7.181.662-3.874-.284 3.307-.756 5.953.472 6.33 1.229.379 1.701.095 1.701-1.794 0-1.89-.661-4.158.095-4.064.756.095 2.55.756 2.55.756"
          fill="none"
          stroke="#FFF"
          strokeWidth={0.665}
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .animated {
    max-width: 300px;
    width: 100%;
    height: 100%;
    stroke-dasharray: ${props => props.pathLength};
    stroke-dashoffset: ${props => props.pathLength};
  }
  .animated.visible {
    animation: draw 3s linear forwards;
  }
  @keyframes draw {
    from {
      stroke-dashoffset: ${props => props.pathLength};
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;
