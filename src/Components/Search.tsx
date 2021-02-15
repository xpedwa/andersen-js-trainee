import React, { useEffect, useState } from 'react';

import { Button, HotSearchInput, Avatar, Panel } from './defaultComponents';
import Card from './Card';
import { Link } from "react-router-dom";

function Search() {
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

  function Search__Results(props : any) {
    return (
      <Panel>
        {
          props.results.map( (card : any) => 
            <Link to={"/view"} key={card.id} >
              <Card cardInfo={card} >
                <Avatar src={card.owner.avatar_url} alt={card.name + "_logo"}/>
              </Card>
            </Link>
          )
        }
      </Panel>
    );
  }
  
  return (
    <div>
      <HotSearchInput onChange={newQuery} placeholder={"Search by GitHub repository"}/>

      <Search__Results results={results}/>
      <Button onClick={getMore} hidden={results.length === 0}>Load More</Button>
    </div>
  );
}

export default Search;
