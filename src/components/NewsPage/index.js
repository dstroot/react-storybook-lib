import React from 'react';

const NewsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5 className="text-uppercase text-primary mb-0">Press Release</h5>
          <p>December 20, 2018</p>
          <h1 className="display-6 mt-5 mb-0">
            Pacific Life Foundation Donates $250,000 to the American Red Cross
            for Victims of the California Wildfires
          </h1>
          <hr className="m-4" />
          <p>
            Cupertino, California — Apple today announced that John Giannandrea
            has been named to the company’s executive team as senior vice
            president of Machine Learning and Artificial Intelligence
            Strategy.He joined Apple in April 2018.
          </p>
          <p>
            Giannandrea oversees the strategy for AI and Machine Learning across
            all Apple products and services, as well as the development of Core
            ML and Siri technologies.His team's focus on advancing and tightly
            integrating machine learning into Apple products is delivering more
            personal, intelligent and natural interactions for customers while
            protecting user privacy.
          </p>
          <p>
            “John hit the ground running at Apple and we are thrilled to have
            him as part of our executive team, ” said Tim Cook, Apple’s
            CEO.“Machine learning and AI are important to Apple’s future as they
            are fundamentally changing the way people interact with technology,
            and already helping our customers live better lives.We’re fortunate
            to have John, a leader in the AI industry, driving our efforts in
            this critical area.”
          </p>
          <p>
            Giannandrea’s team is also helping to enhance the developer
            experience with tools including Core ML and Create ML, making it
            easier and faster to integrate machine learning into apps.
          </p>
          <hr className="m-4" />
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
          <hr className="m-4" />
          <button className="btn btn-large btn-secondary mb-5">
            Latest Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
