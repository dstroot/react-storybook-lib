import React from "react";
import PropTypes from "prop-types";

const HeroBlue = ({ align, image, tagline, text, attribution }) => {
  const heroStyle = {
    /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("photographer.jpg")`,
    backgroundImage: `url(${image})`,

    /* Set a specific height */
    // height: "45vh",
    minHeight: "40vw",
    maxHeight: "50vh",

    /* Position and center the image to scale nicely on all screens */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative"
  };

  const divOverlay = {
    marginTop: "-12vh"
  };

  const textLarge = {
    fontSize: `calc(44px + 1.5vw + 0.5vmin)`,
    lineHeight: "1.2",
    fontWeight: "300"
  };

  const textSmall = {
    fontSize: `calc(20px + 1.5vw + 0.5vmin)`,
    lineHeight: "1.2",
    fontWeight: "300"
  };

  return (
    <>
      <div className="hero text-white" style={heroStyle} />
      <div className="row" style={divOverlay}>
        <div className="col-md-10 offset-md-1 p-3 text-center text-white bg-primary">
          <p style={textLarge}>{tagline || ""}</p>
          <p style={textSmall}>{text || ""}</p>
        </div>
      </div>
    </>
  );
};

HeroBlue.propTypes = {
  /** The background image URL  */
  image: PropTypes.string.isRequired,
  /** The tagline */
  tagline: PropTypes.string.isRequired,
  /** Additional text (options) */
  text: PropTypes.string
};

export default HeroBlue;
