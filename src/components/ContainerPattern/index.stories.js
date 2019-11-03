import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import PlanetView from '../ContainerPattern';
import PlanetContainer from './container';
import { Post } from './container';
// import { TestComponent } from './container';

const planet = {
  name: 'Dagobah',
  rotation_period: '23',
  orbital_period: '341',
  diameter: '8900',
  climate: 'murky',
  gravity: 'N/A',
  terrain: 'swamp, jungles',
  surface_water: '8',
  population: 'unknown',
  residents: [],
  films: [
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
  ],
  created: '2014-12-10T11:42:22.590000Z',
  edited: '2014-12-20T20:58:18.425000Z',
  url: 'https://swapi.co/api/planets/5/',
};

// PlanetView section
storiesOf('API|PlanetView', module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false,
      text: `
        A simple view-only generic planet component, and a logic-only component, that simply calls the view in its render function.

        With the separated view component, we can very easily use it in a style guide, and fine tune each of the variants just by providing different props. Also, we can easily test the view using Enzyme for instance.

        http://lucasmreis.github.io/blog/simple-react-patterns/
        
        https://www.swapi.co/about
      `,
    },
  })
  .add('show PlanetView loading', () => <PlanetView loading />)
  .add('show PlanetView error', () => <PlanetView error />)
  .add('show PlanetView', () => <PlanetView planet={planet} />)
  .add('show PlanetContainer', () => (
    <>
      <Post />
      <PlanetContainer />
    </>
  ));
