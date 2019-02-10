// https://mor10.com/power-of-wordpress-image-metadata/
import React, { useState } from "react";
import PropTypes from "prop-types";
import arrow4 from "./media/download-arrow.svg";

const ImageItem = ({ image }) => {
  const [visible, setVisible] = useState(false);

  // modal close function
  const close = () => {
    setVisible(false);
  };

  return (
    <>
      <ImageModal image={image} visible={visible} close={close} />
      <div className="col-sm-4 mt-4">
        <img
          className="img-fluid link"
          src={image.full}
          width="400px"
          height="400px"
          alt={image.alt}
          onClick={() => setVisible(true)}
        />
        <br />
        <p className="lead d-inline">
          <a
            className=""
            href={image.full}
            aria-label="Download Google"
            download
          >
            <img className="mr-2" src={arrow4} width="18px" alt="arrow" />
          </a>
          {image.title}
        </p>
      </div>
    </>
  );
};

const ImageModal = ({ image, visible, close }) => {
  if (visible) {
    return (
      <>
        <div class="modal-backdrop fade show" />
        <div
          id="exampleModalLive"
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close mb-4"
                  aria-label="Close"
                  onClick={close}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <img className="img-fluid" src={image.full} alt={image.alt} />
                <div className="mt-4">
                  <h4 className="d-inline">{image.title}</h4>
                  <a
                    className=""
                    href={image.full}
                    aria-label="Download Google"
                    download
                  >
                    <img
                      className="mr-2 float-right"
                      src={arrow4}
                      width="30px"
                      alt="arrow"
                    />
                  </a>
                  <p className="small text-muted">2800x1868 pixels - 0.2 Mb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default ImageItem;

// define props
ImageItem.propTypes = {
  image: PropTypes.object.isRequired
};

ImageModal.propTypes = {
  image: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};
