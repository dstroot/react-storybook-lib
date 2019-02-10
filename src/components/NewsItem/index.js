import React from 'react';
import placeholder from './media/logo.png';

const textLink = {
  fontSize: `calc(14px + 1vw + 0.25vmin)`,
  lineHeight: '1.1',
  marginBottom: '0',
  fontWeight: '300',
};

// https://getbootstrap.com/docs/4.1/layout/media-object/
const NewsItem = ({ item }) => (
  <>
    <a className="news-link" href={item.url}>
      <div className="media">
        <img
          className="mr-3 d-none d-sm-block"
          src={item.image || placeholder}
          alt="Generic placeholder"
          width="175px"
          height="115px"
        />
        <div className="media-body">
          <p className="mt-0 text-muted">
            {item.date} / <strong>{item.category}</strong>
          </p>
          <p style={textLink}>{item.headline}</p>
        </div>
      </div>
    </a>
    <hr />
  </>
);

export default NewsItem;

// <h3 className="font-weight-light">{item.headline}</h3>
