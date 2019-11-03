import React, { useState, useEffect } from 'react';
import PlanetView from './index';
// import useFetcher from '../../hooks/useFetcher';

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

  return <PlanetView planet={data.planet} />;
};

// export const TestComponent = () => {
//   const { isLoading, data, error } = useFetcher(
//     'https://www.swapi.co/api/planets/50'
//   );

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-danger">
//         An error occurred loading the data.
//         {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
//       </div>
//     );
//   }

//   return <PlanetView planet={data} />;
// };

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
