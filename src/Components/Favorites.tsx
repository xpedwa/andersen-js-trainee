import React from 'react';

import { Panel } from './defaultComponents';
import ListOfCards from './ListOfCards';

function Favorites({ viewInfo } : any) {
  const favorites : Object[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return (
    <Panel>
      <ListOfCards list={favorites} viewInfo={viewInfo} />
    </Panel>
  );
}

export default Favorites;
