import React from 'react';
import ImageItem from './ImageItem';
import data from './images.json';

// https://github.com/facebook/react/issues/4908

const DownloadArrow = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-6 mb-2 mt-4">All Images</h1>
        </div>
      </div>
      <div className="row">
        {data.map(item => (
          <ImageItem image={item} key={item.id} />
        ))}
      </div>
      <div className="row">
        <div className="col">
          <h1 className="display-6 mb-2 mt-4">All Logos</h1>
        </div>
      </div>
      <div className="row">
        {data.map(item => (
          <ImageItem image={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default DownloadArrow;
