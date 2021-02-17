import React from 'react';

import { Panel } from './defaultComponents';
import ListOfCards from './ListOfCards';

function Favorites() : JSX.Element {
  const favorites : [] = JSON.parse(localStorage.getItem('favorites') || '[{}]');

  return (
    <Panel>
      <ListOfCards list={favorites} />
    </Panel>
  );
}

export default Favorites;
