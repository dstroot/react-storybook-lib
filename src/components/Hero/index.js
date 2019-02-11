import React from "react";
import PropTypes from "prop-types";

// Styles
import "./styles.scss";

const Hero = ({ align, image, tagline, text, attribution }) => {
  return (
    <div
      className="hero text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: `cover`
      }}
    >
      <div className="container-fluid">
        {align === "left" && (
          <div className="row align-items-center p-2">
            <div className="col-md-4 offset-md-1 p-lg-5 my-5 bg-shade">
              <h6 className="text-uppercase">{tagline || ""}</h6>
              <h3 className="font-weight-light">{text || ""}</h3>
              <p className="font-weight-light">{attribution || ""}</p>
            </div>
          </div>
        )}
        {align === "center" && (
          <>
            <div className="row pt-5 mt-5" />
            <div className="row pt-5 align-items-bottom">
              <div className="col-md-6 offset-md-3 mt-5 p-3 text-center bg-shade">
                <h6 className="text-uppercase">{tagline || ""}</h6>
                <h1 className="display-4">{text || ""}</h1>
                <p className="font-weight-light">{attribution || ""}</p>
              </div>
            </div>
          </>
        )}
        {align === "right" && (
          <div className="row align-items-center p-2">
            <div className="col-md-4 offset-md-7 p-lg-5 my-5 bg-shade">
              <h6 className="text-uppercase">{tagline || ""}</h6>
              <h3 className="font-weight-light">{text || ""}</h3>
              <p className="font-weight-light">{attribution || ""}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Hero.propTypes = {
  /** Where to place the text (left/center/right) */
  align: PropTypes.string.isRequired,
  /** The background image URL */
  image: PropTypes.string.isRequired,
  /** The tagline */
  tagline: PropTypes.string,
  /** Some text */
  text: PropTypes.string,
  /** Quote attribution */
  attribution: PropTypes.string
};

export default Hero;
