import React, { Component } from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../../Firebase";

// TODO
// https://medium.com/get-it-working/get-googles-firestore-working-with-react-c78f198d2364
// https://github.com/soumak77/firebase-mock/blob/master/tutorials/client/firestore.md
// https://console.firebase.google.com/u/0/project/react-firestore-news/database/firestore/data~2Fnews~2FtZ5cS7BMLy4bp6OCSGa0
// https://medium.com/@hrutjes/building-a-react-firestore-app-with-zero-effort-and-mobx-525df611eabf

const Row = ({ doc, delHandler }) => {
  const id = doc.id;
  const { datetime, draft, headline } = doc.data;
  return (
    <tr>
      <td className="align-middle">{datetime}</td>
      <td className="align-middle">
        {draft ? <FontAwesomeIcon icon="check" /> : ""}
      </td>
      <td>
        <Link to={`/news/${id}`} className="btn btn-link text-left m-0">
          {headline}
        </Link>
      </td>
      <td>
        <Link to={`/news/edit/${id}`} className="btn btn-link m-0">
          <FontAwesomeIcon icon="edit" />
        </Link>
        <button className="btn btn-link m-0" onClick={() => delHandler(id)}>
          <FontAwesomeIcon icon="trash-alt" />
        </button>
      </td>
    </tr>
  );
};

class EditList extends Component {
  constructor(props) {
    super(props);
    this.ref = db.collection("news"); // get a reference to the collection
    this.state = {
      loading: true,
      news: []
    };
    this.delHandler = this.delHandler.bind(this);
  }

  onCollectionUpdate = snapshot => {
    const docs = snapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    }));

    this.setState({
      news: docs,
      loading: false
    });
  };

  componentDidMount() {
    // listen for updates
    this.unsubscribe = this.ref
      .orderBy("datetime", "desc")
      .onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  delHandler(id) {
    db.collection("news")
      .doc(id)
      .delete()
      .then(() => {
        // success
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    const { news, loading } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-between mt-5">
          <div className="col-md-6">
            <h1 className="display-4">News Story List</h1>
          </div>
          <div className="col-md-3">
            <Link
              to="/news/create"
              className="btn btn-primary btn-block mt-3 mb-3"
            >
              <FontAwesomeIcon icon="plus-square" className="mr-2" />
              Add Story
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-sm">
              <thead className="thead-light">
                <tr>
                  <th>Date</th>
                  <th>Draft</th>
                  <th>Headline</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  news.map(doc => (
                    <Row key={doc.id} doc={doc} delHandler={this.delHandler} />
                  ))
                )}
              </tbody>
            </table>
            <Link to="/news" className="btn btn-secondary">
              View News
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EditList;
