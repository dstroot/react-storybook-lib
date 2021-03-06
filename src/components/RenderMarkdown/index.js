import React from "react";
import Markdown from "react-markdown";
import PropTypes from "prop-types";

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
  /** Pass in some markdown! */
  markdown: PropTypes.string
};

export default RenderMarkdown;
