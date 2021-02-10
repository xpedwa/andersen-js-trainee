// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import './Search.css';

function Search() {
  const [query, setQuery] : [string, any] = useState('');
  const [results, setResults] : [Object[], any] = useState([]);

  useEffect(() => {
    query && query.length > 2 && fetch(`https://api.github.com/search/repositories?q=${query}`)
      .then(response => response.json())
      .then(obj => obj.items)
      .then((res) => setResults(res))
  }, [query]);

  function SearchInput() {
    return (
      <div className="SearchInput">
        <input value={query} onChange={(e) => setQuery(e.target.value)} autoFocus placeholder="Search by GitHub repository" />
      </div>
    );
  }

  function SearchResult() {
    return (
      <div className="SearchResult">
        {results.map( (repoIt : any) => 
          <div className="SearchResult__item" key={repoIt.id}>
            <img className="SearhResult__logo" src={repoIt.owner.avatar_url} alt={repoIt.name + "_logo"}/>
            <div>{repoIt.name}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <SearchInput />
      <SearchResult />
    </>
  );
}

export default Search;
