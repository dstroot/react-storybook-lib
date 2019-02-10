import React from 'react';

// import SVG files
import Family from './media/family.svg';
import Time from './media/time.svg';
import Business from './media/business.svg';
import Money from './media/money.svg';

const MarketingSection = () => {
  return (
    <div className="bg-primary text-center text-white">
      <div className="container">
        <div className="row text-uppercase">
          <div className="col">
            <div className="svg-container mx-auto mt-4 w-50 p-3">
              <img src={Money} alt="money" />
            </div>
            <h5 className="mt-1 p-3">Save enough money to meet my needs.</h5>
          </div>

          <div className="col">
            <div className="svg-container mx-auto mt-4 w-50 p-3">
              <img src={Family} alt="family" />
            </div>
            <h5 className="mt-1 p-3">Ensure my family is protected.</h5>
          </div>

          <div className="w-100 d-md-none" />

          <div className="col">
            <div className="svg-container mx-auto mt-4 w-50 p-3">
              <img src={Time} alt="time" />
            </div>
            <h5 className="mt-1 p-3">Make sure I don't run out of money.</h5>
          </div>

          <div className="col">
            <div className="svg-container mx-auto mt-4 w-50 p-3">
              <img src={Business} alt="business" />
            </div>
            <h5 className="mt-1 p-3">Protect and plan for my business.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;
