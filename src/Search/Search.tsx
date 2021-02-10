// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import './Search.css';

function Search() {
  const [query, setQuery] : [string, any] = useState('');
  const [results, setResults] : [Object[], any] = useState([]);
  const [page, setPage] : [number, any] = useState(1);

  const newQuery = (e : any) => {
    setPage(1);
    setQuery(e.target.value);
  }

  const getMore = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    query && query.length > 2 && fetch(`https://api.github.com/search/repositories?q=${query}&per_page=20&page=${page}`)
      .then(response => response.json())
      .then(obj => obj.items)
      .then((res) => {
        page > 1 
          ? setResults((prevResults : any) => prevResults.concat(res)) 
          : setResults(res)
      })
  }, [query, page]);

  function SearchInput() {
    return (
      <div className="SearchInput">
        <input value={query} onChange={newQuery} autoFocus placeholder="Search by GitHub repository" />
      </div>
    );
  }

  function LoadMore() {
    return(
      <input className="LoadMore" type="button" value="Load More" onClick={getMore} />
    )
  }

  function SearchResult() {
    return (
      <div className="SearchResult">
        {
          results.map( (repoIt : any) => 
            <div className="SearchResult__item" key={repoIt.id}>
              <img className="SearhResult__logo" src={repoIt.owner.avatar_url} alt={repoIt.name + "_logo"}/>
              <div>{repoIt.name}</div>
            </div>
          )
        }
      </div>
    );
  }

  return (
    <>
      <SearchInput />
      <SearchResult />
      <LoadMore />
    </>
  );
}

export default Search;
