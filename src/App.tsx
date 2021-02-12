import React, { useEffect, useState } from 'react';

import ResultsPanel from './Components/SearchPanel';
import { Header, Button, HotSearchInput } from './Components/defaultComponents';

function App() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<[]>([]);
  const [page, setPage] = useState<number>(1);

  const newQuery = (event : any) => {
    setPage(1);
    setQuery(event.target.value);
  }

  const getMore = () => {
    setPage(page + 1)
  }

  const fetchToGitHub = (query : string, page : number) => {
    query && query.length > 2 && fetch(`https://api.github.com/search/repositories?q=${query}&per_page=20&page=${page}`)
    .then(response => response.json())
    .then(obj => obj.items)
    .then((res) => {
      page > 1 
        ? setResults((prevResults : any) => prevResults.concat(res)) 
        : setResults(res)
    })
  }

  useEffect(() => {
    fetchToGitHub(query, page);
  }, [query, page]);

  return (
    <>
      <Header>
        <HotSearchInput onChange={newQuery} placeholder={"Search by GitHub repository"}/>
      </Header>

      <ResultsPanel results={results}/>
      <Button onClick={getMore} hidden={results.length === 0}>Load More</Button>
    </>
  );
}

export default App;
