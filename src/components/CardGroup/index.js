import React from "react";

// import SVG files
import { ReactComponent as Flag } from "./media/flag.svg";
import { ReactComponent as Locked } from "./media/locked.svg";
import { ReactComponent as Handshake } from "./media/handshake.svg";

import "./styles.scss";

const CardGroup = () => {
  return (
    <div className="container-fluid bg-primary text-center text-white">
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="display-4 pt-5">
            What the Power of Pacific Means for You
          </h1>
          <div className="card-group my-3">
            <div className="card bg-primary border-0">
              <div className="svg-container mx-auto">
                <Flag />
              </div>
              <div className="card-body">
                <h3 className="card-title">Freedom</h3>
                <p className="card-text">
                  Life insurance and retirement solutions to help you reach your
                  goals.
                </p>
              </div>
            </div>
            <div className="card bg-primary border-0">
              <div className="svg-container mx-auto">
                <Locked />
              </div>
              <div className="card-body">
                <h3 className="card-title">Security</h3>
                <p className="card-text">
                  A deep commitment to protecting generations of families.
                </p>
              </div>
            </div>
            <div className="card bg-primary border-0">
              <div className="svg-container d-block mx-auto align-bottom">
                <Handshake />
              </div>
              <div className="card-body">
                <h3 className="card-title">Trust</h3>
                <p className="card-text">
                  150 years of strength and stability by your side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
