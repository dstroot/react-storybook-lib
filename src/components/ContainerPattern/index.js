import React from 'react';

// Planet View
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
  <div className="text-danger">Something went wrong! Please try again.</div>
);

// Planet View
const Planet = ({ name, climate, terrain }) => (
  <div>
    <h2>{name}</h2>
    <div>Climate: {climate}</div>
    <div>Terrain: {terrain}</div>
  </div>
);

// Main component
const PlanetView = ({ loading, planet }) => {
  if (loading) {
    return <Loading />;
  } else if (planet) {
    return <Planet {...planet} />;
  } else {
    return <ErrorView />;
  }
};

export default PlanetView;
