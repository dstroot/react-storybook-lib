import React from 'react';
import useSWR from 'swr'; // https://swr.now.sh/

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

// get data
// TODO - return error?
const getPlanet = url => fetch(url).then(_ => _.json());

// // get data
// const getData = async url => {
//   try {
//     // get data
//     const res = await fetch(url);

//     // process response
//     console.log(res);
//     if (res.ok) {
//       const data = await res.json();
//       return data;
//     } else {
//       throw new Error(res.status + ' ' + res.statusText);
//     }
//   } catch (error) {
//     throw error;
//   }
// };

const PlanetContainer = ({ url }) => {
  const { data, error } = useSWR(
    'https://www.swapi.co/api/planets/50',
    getPlanet
  );

  if (error) return <ErrorView />;

  if (!data) return <Loading />;

  return <Planet {...data} />;
};

export default PlanetContainer;
