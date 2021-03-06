import React from "react";
import PropTypes from "prop-types";
import placeholder from "./media/logo.png";

const NewsItem = ({ item }) => {
  const { datetime, image, headline, cutline, category } = item.data;

  return (
    <>
      <div className="row">
        <div className="col d-none d-sm-block">
          <img
            className="mr-3"
            src={image || placeholder}
            alt="Generic placeholder"
            width="520px"
          />
        </div>
        <div className="col">
          <p className="mt-0 text-muted">
            {datetime} / <strong>{category}</strong>
          </p>
          <h3 className="news-link font-weight-light">{headline}</h3>
          <p>{cutline}</p>
          <a className="btn btn-primary" href={`/news/${item.id}`}>
            Read Article
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;

// define props
NewsItem.propTypes = {
  /** Item is an object that contains the story props */
  item: PropTypes.object.isRequired
};
