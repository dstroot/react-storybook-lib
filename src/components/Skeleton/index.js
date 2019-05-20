import React from 'react';
// import styled, { keyframes } from 'styled-components';

// styles
import './styles.scss';

/**
 * https://medium.com/octopus-wealth/skeleton-loading-pages-with-react-5a931f12677b
 * https://stackoverflow.com/questions/51338631/react-how-to-specify-animation-keyframes-and-classes-locally
 */

// const SSkeletonPulse = styled.div`
//   display: inline-block;
//   height: 100%;
//   width: 100%;
//   background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
//   background-size: 400%;
//   animation: pulse 1.2s ease-in-out infinite;
//   @keyframes pulse {
//     0% {
//       background-position: 0% 0%;
//     }
//     100% {
//       background-position: -135% 0%;
//     }
//   }
// `;

// const SSkeletonLine = styled(SSkeletonPulse)`
//   width: 5.5em;
//   border-radius: 5px;

//   &::before {
//     content: '\00a0';
//   }
// `;

// const Skeleton = () => <SSkeletonLine />;

const Skeleton = () => <div className="skeleton" />;

export default Skeleton;
