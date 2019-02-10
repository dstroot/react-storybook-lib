import React from 'react';
import PropTypes from 'prop-types';

// Styles
import "./styles.scss";

const MarketingImage = ({ lead, text, image, url }) => {
  return (
    <a href={url}>
      <div
        className="img-box mt-3"
        style={{
          background: `url(${image}) left top no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <div className="overlay">
          <div className="img-box-text text-white">
            <h3 className="text-uppercase">{lead}</h3>
            <p className="img-box-content">{text}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MarketingImage;

MarketingImage.propTypes = {
  image: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
