import React, { useEffect } from "react";

import { Button, HotSearchInput, Panel } from "./UIComponents";
import ListOfCards from "./ListOfCards";
import { ICardInfo } from "../tsType";

function Search({
  searchState,
  setStore,
}: {
  searchState: any;
  setStore: any;
}): JSX.Element {
  const newSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setStore.setPage(1);
    setStore.setQuery(event.currentTarget.value);
  };

  const {
    query,
    page,
    results,
  }: { query: string; page: number; results: ICardInfo[] } = searchState;

  const getMore = () => {
    setStore.setPage(page + 1);
  };

  useEffect(() => {
    query &&
      query.length > 2 &&
      fetch(
        `https://api.github.com/search/repositories?q=${query}&per_page=20&page=${page}`
      )
        .then((response) => response.json())
        .then((obj) => obj.items)
        .then((res: ICardInfo[]) => {
          page > 1
            ? setStore.setResults(results.concat(res))
            : setStore.setResults(res);
        });
  }, [query, page]);

  return (
    <div>
      <HotSearchInput
        onChange={newSearch}
        value={query}
        placeholder="Search by GitHub repository"
      />

      <Panel>
        <ListOfCards list={results} />
      </Panel>

      <Button onClick={getMore} hidden={results.length === 0}>
        Load More
      </Button>
    </div>
  );
}

export default Search;
