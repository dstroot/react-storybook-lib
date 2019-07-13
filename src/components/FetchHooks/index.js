import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useDataApi = (initialUrl, initialData) => {
  // state management
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // make API call
  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(url);
      setData(result.data);
    } catch (error) {
      setIsError(true);
      console.log(error.message);
    }

    setIsLoading(false);
  };

  // useEffect hook to call API
  useEffect(
    () => {
      fetchData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url] // only run if url changes
  );

  const doGet = (event, url) => {
    event.preventDefault();
    setUrl(url);
  };

  return { data, isLoading, isError, doGet };
};

function FetchHooks() {
  const [query, setQuery] = useState('redux');
  const { data, isLoading, isError, doGet } = useDataApi(
    'http://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] }
  );

  return (
    <div className="container">
      <form
        className="form-inline mt-5"
        onSubmit={event =>
          doGet(event, `http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        <label className="sr-only" for="query">
          Query
        </label>
        <input
          type="text"
          class="form-control mb-2 mr-sm-2"
          id="query"
          placeholder={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button className="btn btn-primary mb-2" type="submit">
          Search
        </button>
      </form>

      {isError && <div className="text-danger">Something went wrong ...</div>}

      {isLoading ? (
        <div className="text-muted">Loading ...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchHooks;
