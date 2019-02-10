import React from "react";

// styles
import "./styles.scss";

// images
import card1 from "./media/card1.jpg";
import card2 from "./media/card2.jpg";
import card3 from "./media/card3.jpg";
import { ReactComponent as Clock } from "./media/clock.svg";

const Cards = () => (
  <div className="container-fluid bg-light pb-5">
    <div className="row">
      <div className="col text-center p-4">
        <h1 className="card-display">INSIGHTS TO HELP YOU MEET YOUR GOALS</h1>
      </div>
    </div>
    <div className="row">
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src={card1} alt="retirement planning" />
          <div className="card-body">
            <h5 className="card-title text-muted">RETIREMENT PLANNING</h5>
            <h3>
              Make the Most of Your Retirement With an Informed Income Strategy.
            </h3>
          </div>
          <div className="card-footer bg-white">
            <a href="/" className="btn btn-primary">
              Read
            </a>
            <div className="d-inline p-2">
              <Clock height="15px" width="15px" />
              <strong className="align-middle"> 5 min read</strong>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={card2} alt="business" />
          <div className="card-body">
            <h5 className="card-title text-muted">CAREER AND BUSINESS</h5>
            <h3>Don’t Put Off Saving for Retirement</h3>
            <p className="card-text">
              Start building your nest egg early to prepare for retirement.
            </p>
          </div>
          <div className="card-footer bg-white">
            <a href="/" className="btn btn-primary">
              Read
            </a>
            <div className="d-inline p-2">
              <Clock height="15px" width="15px" />
              <strong className="align-middle"> 7 min read</strong>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={card3} alt="older couple" />
          <div className="card-body">
            <h5 className="card-title text-muted">RETIREMENT PLANNING</h5>
            <h3>Deciding When to Claim Retirement Benefits</h3>
            <p className="card-text">
              Claiming benefits when you are younger than your full retirement
              age can mean missing out on hundreds of dollars per month.
            </p>
          </div>
          <div className="card-footer bg-white">
            <a href="/" className="btn btn-primary">
              Read
            </a>
            <div className="d-inline p-2">
              <Clock height="15px" width="15px" />
              <strong className="align-middle"> 3 min read</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Cards;
