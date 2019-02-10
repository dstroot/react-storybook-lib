import React from 'react';

const NewsArticle = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5 className="text-uppercase text-primary mb-0 mt-5">
            Press Release
          </h5>
          <p>December 20, 2018</p>
          <h1 className="display-6 mt-5 mb-0">
            Pacific Life Foundation Donates $250,000 to the American Red Cross
            for Victims of the California Wildfires
          </h1>
          <hr className="m-4" />
          <p>
            NEWPORT BEACH, CA – The Pacific Life Foundation announced today a
            $250,000 donation to the American Red Cross in support of relief
            efforts for those impacted by the California wildfires. The
            Foundation also announced plans to match employee donations.
          </p>
          <p>
            To help people affected by the California wildfires, visit
            redcross.org, call 1- 800-RED CROSS or text the word CAWILDFIRES to
            90999 to make a $10 donation. Donations enable the Red Cross to
            prepare for, respond to and help people recover from these
            disasters.
          </p>
          <h5>About Pacific Life and the Pacific Life Foundation</h5>
          <p>
            The Pacific Life Foundation was established in 1984. Together with
            Pacific Life, the Foundation has contributed more than $100 million
            to community and national nonprofit organizations. Grants are made
            to organizations that address a broad spectrum of social needs.
          </p>
          <p>
            Celebrating its 150th anniversary in 2018, Pacific Life provides a
            wide range of insurance products, annuities, and mutual funds, and
            offers a variety of investment products and services to individuals,
            businesses, and pension plans. Pacific Life counts more than half of
            the 100 largest U.S. companies as its clients. For additional
            company information, including current financial strength ratings,
            visit{' '}
            <a
              className="card-link"
              href="http://www.pacificlife.com/"
              target="_top"
            >
              www.PacificLife.com
            </a>
            . To explore the heritage of Pacific Life and learn more about our
            history, visit{' '}
            <a className="link" href="http://www.pl150years.com" target="_top">
              www.pl150years.com
            </a>
            .
          </p>
          <p>
            Pacific Life refers to Pacific Life Insurance Company and its
            affiliates, including Pacific Life & Annuity Company. Client count
            as of June 2018 is compiled by Pacific Life using the 2018 FORTUNE
            500® list.
          </p>
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
                src="/media/logo.png"
                alt="Generic placeholder"
                width="175px"
                height="115px"
              />
            </div>
          </div>

          <hr className="m-4" />
          <a className="btn btn-large btn-secondary mb-5" href="/news">
            Back to Latest Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
