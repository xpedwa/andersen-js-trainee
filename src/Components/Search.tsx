import React, { useEffect, useState } from "react";
import { Button, HotSearchInput, Panel } from "./UIComponents";
import ListOfCards from "./ListOfCards";
import { ICardInfo, stringState } from "../tsType";

function Search({ cashedQuery }: { cashedQuery: stringState }): JSX.Element {
  const [getCashedQuery, setCashedQuery] = cashedQuery;

  const [query, setQuery] = useState<string>(getCashedQuery);
  const [page, setPage] = useState<number>(1);
  const [results, setResults] = useState<ICardInfo[]>([]);

  const newSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setPage(1);
    setQuery(event.currentTarget.value);
  };

  const getMore = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    setCashedQuery(query);

    query &&
      query.length > 2 &&
      fetch(
        `https://api.github.com/search/repositories?q=${query}&per_page=20&page=${page}`
      )
        .then((response) => response.json())
        .then((obj) => obj.items)
        .then((res: ICardInfo[]) => {
          page > 1
            ? setResults((prevResults: ICardInfo[]) => prevResults.concat(res))
            : setResults(res);
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
