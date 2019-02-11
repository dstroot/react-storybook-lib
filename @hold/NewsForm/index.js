import React from "react";
import Button from "../Button";
import { Link } from "@reach/router";

const NewsForm = ({
  valid,
  submitted,
  success,
  message,
  draft,
  datetime,
  headline,
  cutline,
  story,
  category,
  image,
  onSubmit,
  onChange
}) => {
  return (
    <>
      <h3 className="mt-3 font-weight-light">News Story:</h3>
      <form
        onSubmit={onSubmit}
        noValidate
        className={!valid ? "was-validated" : ""}
      >
        <fieldset disabled={submitted} aria-busy={submitted}>
          <div className="form-row align-items-center">
            {/* Date */}
            <div className="form-group col-md-6">
              <label htmlFor="date">Date</label>
              <input
                name="datetime"
                type="date" // datetime-local  date
                className="form-control"
                value={datetime}
                onChange={onChange}
                required
              />
              <div className="invalid-feedback">Please enter a date.</div>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>

          {/* Draft */}
          <div className="form-group form-check col-md-6">
            <input
              type="checkbox"
              className="form-check-input"
              name="draft"
              checked={draft}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="draft">
              Draft
            </label>
          </div>
          {/* end row */}

          {/* Headline */}
          <div className="form-group">
            <label htmlFor="headline">Headline</label>
            <textarea
              name="headline"
              type="text"
              className="form-control"
              placeholder="Please enter a headline"
              value={headline}
              onChange={onChange}
              required
            />
            <div className="invalid-feedback">Please enter a headline.</div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* cutline area */}
          <div className="form-group">
            <label htmlFor="cutline">Cutline</label>
            <textarea
              name="cutline"
              className="form-control"
              placeholder="Please enter a cutline"
              value={cutline}
              onChange={onChange}
              required
            />
            <div className="invalid-feedback">Please enter some text.</div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* story area */}
          <div className="form-group">
            <label htmlFor="story">Story</label>
            <textarea
              name="story"
              className="form-control"
              placeholder="Please enter a story"
              rows={10}
              value={story}
              onChange={onChange}
              required
            />
            <div className="invalid-feedback">Please enter some text.</div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="form-row align-items-center">
            {/* category */}
            <div className="form-group col-md-6">
              <label htmlFor="category">Category</label>
              <select
                className="form-control"
                name="category"
                value={category}
                onChange={onChange}
              >
                <option category="Company News">Company News</option>
                <option category="Movers and Shakers">
                  Movers and Shakers
                </option>
                <option category="Product News">Product News</option>
              </select>
              <div className="invalid-feedback">Please select one.</div>
              <div className="valid-feedback">Looks good!</div>
            </div>

            {/* image */}
            <div className="form-group col-md-6">
              <label htmlFor="image">image</label>
              <input
                name="image"
                type="text"
                className="form-control"
                placeholder="Please enter the image URL"
                value={image}
                onChange={onChange}
              />
              <div className="invalid-feedback">Please enter the URL.</div>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          {/* end row */}
        </fieldset>

        {/* Submit button */}
        <div className="form-row justify-content-between mt-3">
          <div className="col-md-5">
            <Link to="/news/edit" className="btn btn-block btn-secondary">
              Cancel
            </Link>
          </div>
          <div className="col-md-5">
            <Button submitted={submitted} success={success} />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {message ? <p className="text-danger">{message}</p> : ""}
        </div>
      </div>
    </>
  );
};

export default NewsForm;
