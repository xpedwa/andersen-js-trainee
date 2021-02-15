import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Button } from './Components/defaultComponents';
import Search from './Components/Search';
import Favorites from './Components/Favorites';
import View from './Components/View';

function App() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<[]>([]);
  const [page, setPage] = useState<number>(1);
  
  const [viewRepo, setViewRepo] = useState<any>('');

  const viewInfo = (info : any) => {
    // const repoId = !!event.target.id ? event.target.id : event.target.parentNode.id;
    setViewRepo(info);
  }

  const addToFavorites = () => {
    let locStor : [{}] = JSON.parse(localStorage.getItem('favorites') || '[]');
    locStor.push(viewRepo);
    localStorage.setItem('favorites', JSON.stringify(locStor) || '[]');
  }

  const rmFromFavorites = () => {
    console.log('remove: false')
  }

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
    <Router>
      <Link to="/search"><Button>Search</Button></Link>
      <Link to="/favorites"><Button>Favorites</Button></Link>

      <Switch>
          <Route path="/search">
            <Search 
              newQuery={newQuery} 
              query={query} 
              getMore={getMore} 
              results={results}
              viewInfo={viewInfo}
            />
          </Route>

          <Route path={!!viewRepo ? "/view" : "/search"}>
            <View info={viewRepo} addToFavorites={addToFavorites} rmFromFavorites={rmFromFavorites}/>
          </Route>

          <Route path="/favorites">
            <Favorites viewInfo={viewInfo} />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
