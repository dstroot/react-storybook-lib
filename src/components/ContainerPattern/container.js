import React, { useState, useEffect } from 'react';
import PlanetView from './index';

// State:
// { loading: true }
// { loading: false, planet: { name, climate, terrain } }
// { loading: false, error: any }

export const Post = () => {
  const [data, setData] = useState({ state: 'pending' });

  useEffect(() => {
    fetch(`https://www.swapi.co/api/planets/5`)
      .then(response => response.json())
      .then(planet => setData({ state: 'resolved', planet }))
      .catch(error => setData({ state: 'rejected', error }));
  }, []);

  if (data.state === 'pending') {
    return <div>Loading...</div>;
  }

  if (data.state === 'rejected') {
    return (
      <div>
        Error: <pre>{JSON.stringify(data.error, null, 2)}</pre>
      </div>
    );
  }

  // return (
  //   <div>
  //     <h2>{data.planet.name}</h2>
  //     <div>Climate: {data.planet.climate}</div>
  //     <div>Terrain: {data.planet.terrain}</div>
  //   </div>
  // );

  return <PlanetView {...data.planet} />;
};

class PlanetContainer extends React.Component {
  state = { loading: true };

  componentDidMount() {
    fetch('https://www.swapi.co/api/planets/5')
      .then(res => res.json())
      .then(
        planet => this.setState({ loading: false, planet }),
        error => this.setState({ loading: false, error })
      );
  }

  render() {
    return <PlanetView {...this.state} />;
  }
}

export default PlanetContainer;
