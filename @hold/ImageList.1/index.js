import React from "react";
import PropTypes from "prop-types";

// components
import ImageItem from "../../components/ImageItem";

const ImageList = ({ data }) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <h1 className="display-6 mb-2 mt-4">Image Library</h1>
        </div>
      </div>
      <div className="row align-items-end">
        {data.map(item => (
          <ImageItem image={item} key={item.id} />
        ))}
      </div>
      <p className="small text-muted mt-4">
        Images on this page may be used for publication with credit: "Source:
        Pacific Life."
      </p>
    </div>
  );
};

export default ImageList;

// define props
ImageList.propTypes = {
  data: PropTypes.array.isRequired
};
