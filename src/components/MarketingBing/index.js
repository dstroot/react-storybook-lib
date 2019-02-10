import React from 'react';
import PropTypes from 'prop-types';

const MarketingBing = ({ index, lead, text, cta, url }) => {
  return (
    <a href={url}>
      <div
        className="image-box mt-5"
        style={{
          background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
      url('https://bing.biturl.top/?resolution=1920&format=image&index=${index}&mkt=en-US')
        center center no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <div className="overlay">
          <div className="image-box-text text-white">
            <p className="lead text-uppercase">{lead}</p>
            <h3 data-unite-orphan="">{text}</h3>
            <p className="mt-4">{cta}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MarketingBing;

MarketingBing.propTypes = {
  index: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
