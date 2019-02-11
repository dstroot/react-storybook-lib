import React from "react";
import renderer from "react-test-renderer";

import NewsArticle from "../NewsArticle";
const data = {
  datetime: "2019-01-08",
  draft: false,
  image: "/media/i.jpg",
  cutline:
    "Pacific Life Foundation Donates $250,000 to the American Red Cross for Victims of the California Wildfires",
  headline:
    "Pacific Life Foundation Donates $250,000 to the American Red Cross for Victims of the California Wildfires",
  story: `NEWPORT BEACH, Calif. – Jan. 8, 2019 – Pacific Life today announced that its Life Insurance and Retirement Solutions Divisions have both been honored with 2018 DALBAR customer service awards. The Life Insurance Division was awarded with the Insurance Service Award which recognizes outstanding telephone support to policyholders. These interactions are reviewed throughout the year, covering all aspects of the customer experience. To qualify for the award, companies must exceed quality thresholds in all criteria.Pacific Life's Retirement Solutions Division earned the Financial Intermediary Service Award for the 15th consecutive year and ranked #1 among annuity companies for the sixth consecutive year. The award reflects outstanding quality of telephone service and support delivered post-sale to financial professionals."At Pacific Life, we value the relationships we share with policyholders and financial professionals, which don’t end when a product is sold," said Pacific Life Executive Vice President and Chief Operating Officer Adrian Griggs. "We're proud to be recognized for exceptional service and strive to ensure enduring customer support."**About Pacific Life**For more than 150 years, Pacific Life has helped millions of individuals and families with their financial needs through a wide range of life insurance products, annuities, and mutual funds, and offers a variety of investment products and services to individuals, businesses, and pension plans. Whether your goal is to protect loved ones or grow your assets for retirement, Pacific Life offers innovative products and services that provide value and financial security for current and future generations. Pacific Life counts more than half of the 100 largest U.S. companies as its clients. For additional company information, including current financial strength ratings, visit www.PacificLife.com. Pacific Life refers to Pacific Life Insurance Company and its affiliates, including Pacific Life & Annuity Company. Client count as of June 2018 is compiled by Pacific Life using the 2018 FORTUNE 500® list.**About DALBAR**DALBAR, Inc. is the financial community’s leading independent expert for evaluating, auditing and rating business practices, customer performance, product quality and service. Launched in 1976, DALBAR has earned recognition for consistent and unbiased evaluations of investment companies, registered investment advisers, insurance companies, broker/dealers, retirement plan providers and financial professionals. DALBAR awards are recognized as marks of a superior standard of care in the financial community.`,
  category: "Company News"
};

describe("NewsArticle", () => {
  it("it should render", () => {
    const component = renderer.create(<NewsArticle article={data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
