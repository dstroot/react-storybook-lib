import React, { lazy, Suspense } from 'react';
// import PropTypes from 'prop-types';
import { importMDX } from 'mdx.macro';

const Content = lazy(() => importMDX('./Content.mdx'));

const RenderMDX = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  </div>
);

// RenderMarkdown.propTypes = {
//   markdown: PropTypes.string,
// };

export default RenderMDX;
