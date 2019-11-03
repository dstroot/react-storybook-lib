import React from 'react';
import useSWR from 'swr'; // https://swr.now.sh/
// import validateResponse from '../../utils/fetchUtils';

// Loading View
const Loading = () => (
  <div>
    <h2>
      <div style={{ width: '130px' }} className="skeleton" />
    </h2>
    <div>
      <div style={{ width: '100px' }} className="skeleton" />
    </div>
    <div>
      <div style={{ width: '170px' }} className="skeleton" />
    </div>
  </div>
);

// Error View
const ErrorView = () => (
  <div className="text-danger">Oh no! Something went wrong!</div>
);

// Planet View
const Planet = ({ name, climate, terrain }) => (
  <div>
    <h2>{name}</h2>
    <div>Climate: {climate}</div>
    <div>Terrain: {terrain}</div>
  </div>
);

const validateResponse = res => {
  if (!res.ok) {
    throw new Error(res.status + ' ' + res.statusText);
  } else {
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      throw new Error(`Request rejected with status ${res.status}`);
    }
  }
};

const getJSON = res => {
  return res.json();
};

// get data
const getData = url =>
  fetch(url)
    .then(validateResponse)
    .then(getJSON);

const PlanetContainer = ({ url }) => {
  const { data, error } = useSWR(
    'https://www.swapi.co/api/planets/50',
    getData
  );

  if (error) return <ErrorView />;
  if (!data) return <Loading />;
  return <Planet {...data} />;
};

export default PlanetContainer;
