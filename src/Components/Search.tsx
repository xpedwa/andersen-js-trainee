import React from "react";

import { Button, HotSearchInput, Panel } from "./UIComponents";
import ListOfCards from "./ListOfCards";
import { ISearchState } from "../tsType";

function Search({
  searchState,
  getListOfCards,
}: {
  searchState: ISearchState;
  getListOfCards: any;
}): JSX.Element {
  const { query, page, listOfCards } = searchState;

  const goSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const newQuery = event.currentTarget.value;
    getListOfCards({ ...searchState, query: newQuery, page: 1 });
  };

  const getMore = () => {
    getListOfCards({ ...searchState, page: page + 1 });
  };

  return (
    <div>
      <HotSearchInput
        onChange={goSearch}
        value={query}
        placeholder="Search by GitHub repository"
      />

      <Panel>
        <ListOfCards list={listOfCards} />
      </Panel>

      <Button onClick={getMore} hidden={listOfCards.length === 0}>
        Load More
      </Button>
    </div>
  );
}

export default Search;
