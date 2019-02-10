import React from 'react';
import PlanetView from './index';

// State:
// { loading: true }
// { loading: false, planet: { name, climate, terrain } }
// { loading: false, error: any }

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
