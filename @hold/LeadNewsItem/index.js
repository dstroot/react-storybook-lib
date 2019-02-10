import React from 'react';
import PropTypes from 'prop-types';
import placeholder from './media/logo.png';

const NewsItem = ({ item }) => (
  <>
    <div className="row align-items-center">
      <div className="col d-none d-sm-block">
        <img
          className="img-fluid mr-3"
          src={item.image || placeholder}
          alt="story"
        />
      </div>
      <div className="col">
        <p className="mt-0 text-muted">
          {item.date} / <strong>{item.category}</strong>
        </p>
        <h3 className="news-link font-weight-light">{item.headline}</h3>
        <p>{item.lede}</p>
        <a className="btn btn-primary" href="/news/article">
          Read Article
        </a>
      </div>
    </div>
  </>
);

export default NewsItem;

// define props
NewsItem.propTypes = {
  item: PropTypes.object.isRequired,
};
