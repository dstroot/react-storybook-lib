import React from 'react';
import image from './media/jesse-sq.jpg';

const NewsContact = () => {
  return (
    <div className="media border mb-5">
      <img
        className="align-self-center rounded-circle m-3"
        src={image}
        alt="Contact"
        height="100"
      />
      <div className="media-body mt-3">
        <address className="mr-3">
          <strong>Media Contact</strong>
          <br />
          <span className="lead">Jesse Page</span>
          <br />
          <a
            className="card-link"
            href="mailto:jpage@pacificlife.com?Subject=Media%20Inquiry"
            target="_top"
          >
            jpage@pacificlife.com
          </a>
          <br />
          <a className="card-link" href="tel:+19492194575">
            (949) 219-4575
          </a>
        </address>
      </div>
    </div>
  );
};

export default NewsContact;
