import React from 'react';
import arrow4 from './download-arrow.svg';

const ImageItem = ({ image }) => (
  <>
    <div className="col-sm-4 mt-4">
      <a
        className=""
        href={image.full}
        aria-label="Download Google"
        data-analytics='{"category": "download", "action": "asset", "label": "asset: {slug}"}'
      >
        <img
          className="img-fluid"
          src={image.full}
          width="400px"
          height="400px"
          alt={image.alt}
        />
      </a>
      <br />
      <p className="lead d-inline">
        <a className="" href={image.full} aria-label="Download Google" download>
          <img className="mr-2" src={arrow4} width="22px" alt="arrow" />
        </a>
        {image.title}
      </p>
    </div>
  </>
);

export default ImageItem;
