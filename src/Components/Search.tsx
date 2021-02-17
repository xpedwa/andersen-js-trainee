import React from 'react';

import {
  Button, HotSearchInput, Panel,
} from './defaultComponents';
import ListOfCards from './ListOfCards';

function Search ({results, query, newSearch, getMore} : {results: any, query: string, newSearch: any, getMore: any}) : JSX.Element {
  return (
    <div>
      <HotSearchInput onChange={newSearch} value={query} placeholder="Search by GitHub repository" />

      <Panel>
        <ListOfCards list={results} />
      </Panel>

      <Button onClick={getMore} hidden={results.length === 0}>Load More</Button>
    </div>
  );
}

export default Search;
