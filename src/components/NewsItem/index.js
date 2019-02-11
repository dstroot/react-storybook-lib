import React from "react";
import placeholder from "./media/logo.png";

// styles
import "./styles.scss";

const NewsItem = ({ item }) => {
  const { datetime, image, headline, category } = item.data;

  const textStyle = {
    fontSize: `calc(14px + 1vw)`,
    lineHeight: "1.2",
    fontWeight: "300"
  };

  return (
    <>
      <a className="news-link" href={`/news/${item.id}`}>
        <div className="media">
          <img
            className="mr-3 d-none d-sm-block"
            src={image || placeholder}
            alt="Generic placeholder"
            width="175px"
            height="115px"
          />
          <div className="media-body">
            <p className="mt-0 text-muted">
              {datetime} / <strong>{category}</strong>
            </p>
            {/* <h3 className="font-weight-light">{headline}</h3> */}
            <p style={textStyle}>{headline}</p>
          </div>
        </div>
      </a>
      <hr />
    </>
  );
};

export default NewsItem;
