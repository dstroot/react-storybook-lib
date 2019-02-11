import React, { Component } from "react";
import NewsForm from "../NewsForm";
import { db } from "../../Firebase";
import { navigate } from "@reach/router";

const unclick = () => {
  if (document.activeElement !== document.body) {
    document.activeElement.blur();
  }
};

class NewsEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: true,
      submitted: false,
      success: "wait", // 'wait', 'yes', 'no'
      message: "",

      // form fields
      key: "",
      draft: false,
      datetime: "",
      headline: "",
      cutline: "",
      story: "",
      category: "",
      image: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    db.collection("news")
      .doc(this.props.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          const item = doc.data();
          this.setState({
            key: doc.id,
            draft: item.draft,
            datetime: item.datetime,
            headline: item.headline,
            cutline: item.cutline,
            story: item.story,
            category: item.category,
            image: item.image
          });
        } else {
          this.setState({
            message: "No such document!"
          });
        }
      });
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

    const {
      draft,
      datetime,
      headline,
      cutline,
      story,
      category,
      image
    } = this.state;

    db.collection("news")
      .doc(this.state.key)
      .set({
        draft,
        datetime,
        headline,
        cutline,
        story,
        category,
        image
      })
      .then(docRef => {
        this.setState({
          key: "",
          draft: false,
          datetime: "",
          headline: "",
          cutline: "",
          story: "",
          category: "",
          image: ""
        });

        // navigate imperatively
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

export default NewsEdit;
