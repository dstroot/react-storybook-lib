import React from "react";
import Markdown from "react-markdown";
import logo from "./media/logo.png";
import { Link } from "@reach/router";

const NewsArticle = ({ article }) => {
  const { datetime, draft, cutline, headline, story } = article;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5 className="text-uppercase text-primary mb-0 mt-5">
            Press Release{" "}
            {draft ? <span className="text-secondary"> [DRAFT]</span> : ""}
          </h5>
          <p>{datetime}</p>
          <h1 className="display-6 mt-5">{headline}</h1>
          <p className="lead mt-4">{cutline}</p>
          <hr className="m-4" />
          <Markdown source={story} />
          <hr className="m-4" />

          <div className="row">
            <div className="col">
              <h3>Press Contacts</h3>
              <address className="">
                <strong>Media Contact</strong>
                <br />
                <a
                  className="card-link"
                  href="mailto:media@pacificlife.com?Subject=Media%20Inquiry"
                  target="_top"
                >
                  media@pacificlife.com
                </a>
                <br />
                <a className="card-link" href="tel:+19492194575">
                  (949) 219-4575
                </a>
              </address>
            </div>
            <div className="col">
              <img
                // className="mr-3 d-none d-sm-block"
                src={logo}
                alt="logo"
                width="175px"
                height="115px"
              />
            </div>
          </div>

          <hr className="m-4" />
          <Link to="/news" className="btn btn-large btn-secondary mb-5">
            Back to Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
