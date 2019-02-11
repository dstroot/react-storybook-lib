import React, { Component } from "react";
import { db } from "../../Firebase";
import NewsArticle from "../NewsArticle";

class ShowArticle extends Component {
  state = {
    loading: true,
    message: "",
    article: {}
  };

  componentDidMount() {
    db.collection("news")
      .doc(this.props.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          this.setState({
            article: doc.data(),
            loading: false
          });
        } else {
          this.setState({
            message: "No such document!"
          });
        }
      });
  }

  render() {
    const { loading, message, article } = this.state;
    return (
      <>
        {loading ? (
          <div className="container">
            <div className="row">
              <div className="col">
                <div class="spinner-border text-primary mt-5" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <h3 className="mt-5 text-danger">{message}</h3>
              </div>
            </div>
          </div>
        ) : (
          <NewsArticle article={article} />
        )}
      </>
    );
  }
}

export default ShowArticle;
