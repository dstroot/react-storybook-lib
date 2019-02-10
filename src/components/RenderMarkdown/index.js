import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

const RenderMarkdown = ({ markdown }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <Markdown source={markdown} />
        </div>
      </div>
    </div>
  );
};

RenderMarkdown.propTypes = {
  markdown: PropTypes.string,
};

export default RenderMarkdown;
