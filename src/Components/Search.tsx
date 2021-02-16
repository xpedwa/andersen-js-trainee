import React from 'react';

import {
  Button, HotSearchInput, Panel,
} from './defaultComponents';
import ListOfCards from './ListOfCards';

function Search({
  results, query, newQuery, getMore, viewInfo,
} : any) {
  return (
    <div>
      <HotSearchInput onChange={newQuery} value={query} placeholder="Search by GitHub repository" />

      <Panel>
        <ListOfCards list={results} viewInfo={viewInfo} />
      </Panel>

      <Button onClick={getMore} hidden={results.length === 0}>Load More</Button>
    </div>
  );
}

export default Search;
