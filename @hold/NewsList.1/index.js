import React from "react";
import { db } from "../../Firebase";
import NewsItem from "../NewsItem";
import LeadNewsItem from "../../components/LeadNewsItem";

class NewsListDB extends React.Component {
  state = {
    loading: true,
    message: "",
    news: []
  };

  // can't seem to set state from inside the query
  // so we do it outside in this function
  onCollectionUpdate = querySnapshot => {
    const docs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    }));

    this.setState({
      news: docs,
      loading: false
    });
  };

  // can't seem to set state from inside the query
  // so we do it outside in this function
  onError = error => {
    this.setState({
      message: "Error getting documents: " + error
    });
  };

  componentDidMount() {
    db.collection("news")
      .where("draft", "==", false)
      .orderBy("datetime", "desc")
      .limit(20)
      .get()
      .then(this.onCollectionUpdate)
      .catch(this.onError);
  }

  render() {
    const { news, message, loading } = this.state;
    let firstItem;
    if (news) {
      firstItem = news.shift();
    }
    const style = {
      width: "3rem",
      height: "3rem"
    };

    return (
      <>
        {loading ? (
          <>
            <div class="d-flex justify-content-center">
              <div
                class="spinner-border text-primary mt-5"
                style={style}
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <p className="text-danger">{message}</p>
          </>
        ) : (
          <>
            <LeadNewsItem item={firstItem} />
            <h1 className="display-6 mb-2 mt-4">All Stories</h1>
            <hr />
            {news.map(doc => (
              <NewsItem item={doc} index={doc.id} key={doc.id} />
            ))}
          </>
        )}
      </>
    );
  }
}

export default NewsListDB;
