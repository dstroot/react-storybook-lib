import React, { Component } from "react";
import { db } from "../../Firebase";
import { navigate } from "@reach/router";
import NewsForm from "../NewsForm";

const unclick = () => {
  if (document.activeElement !== document.body) {
    document.activeElement.blur();
  }
};

class NewsCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: true,
      submitted: false,
      success: "wait", // 'wait', 'yes', 'no'
      message: "",

      // form fields
      draft: true,
      datetime: new Date(),
      headline: "",
      cutline: "",
      story: "",
      category: "Company News",
      image: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    // get form
    const form = e.target;

    // check form data validity first
    if (!form.checkValidity()) {
      this.setState({ valid: false });
      unclick(); // remove focus on button
      return;
    }

    // all good let's continue
    this.setState({
      valid: true,
      submitted: true,
      message: ""
    });

    // get fields from state
    const {
      draft,
      datetime,
      headline,
      cutline,
      story,
      category,
      image
    } = this.state;

    // use instiated db to add to the collection
    db.collection("news")
      .add({
        draft,
        datetime,
        headline,
        cutline,
        story,
        category,
        image
      })
      .then(docRef => {
        // clear state
        this.setState({
          draft: true,
          datetime: "",
          headline: "",
          cutline: "",
          story: "",
          category: "",
          image: ""
        });

        // navigate imperatively (react router)
        navigate("/news/edit");
      })
      .catch(error => {
        this.setState({
          submitted: true,
          success: "no",
          message: `${error.toString()}`
        });
      });
  };

  render() {
    return (
      <NewsForm
        valid={this.state.valid}
        submitted={this.state.submitted}
        success={this.state.success}
        message={this.state.message}
        draft={this.state.draft}
        datetime={this.state.datetime}
        headline={this.state.headline}
        cutline={this.state.cutline}
        story={this.state.story}
        category={this.state.category}
        image={this.state.image}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
      />
    );
  }
}

export default NewsCreate;
