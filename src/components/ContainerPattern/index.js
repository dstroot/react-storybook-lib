import React from 'react';

// loading
const LoadingView = () => <div className="text-muted">Loading...</div>;

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
    return <LoadingView />;
  } else if (planet) {
    return <Planet {...planet} />;
  } else {
    return <ErrorView />;
  }
};

export default PlanetView;
