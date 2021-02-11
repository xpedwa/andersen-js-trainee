// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import './Search.css';

function SearchInput(props : any) {
  return (
    <div className="SearchInput">
      <input value={props.query} onChange={props.newQuery} autoFocus placeholder="Search by GitHub repository" />
    </div>
  );
}

function SearchResult(props : any) {
  return (
    <div className="SearchResult">
      {
        props.results.map( (repoIt : any) => 
          <div className="SearchResult__item" key={repoIt.id}>
            <img className="SearhResult__logo" src={repoIt.owner.avatar_url} alt={repoIt.name + "_logo"}/>
            <div>{repoIt.name}</div>
          </div>
        )
      }
    </div>
  );
}

function LoadMore(props : any) {
  return(
    <div>
      <input className="LoadMore" type="button" value="Load More" onClick={props.getMore} />
    </div>
  )
}

function Search() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Object>([]);
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
      <SearchInput query={query} newQuery={newQuery}/>
      <SearchResult results={results}/>
      <LoadMore getMore={getMore} />
    </>
  );
}

export default Search;
