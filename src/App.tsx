import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { Button } from './Components/defaultComponents';
import Search from './Components/Search';
import Favorites from './Components/Favorites';
import View from './Components/View';

function App() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Object[]>([]);
  const [page, setPage] = useState<number>(1);
  const [viewRepo, setViewRepo] = useState<Object>({});

  const newQuery = (event : any) => {
    setPage(1);
    setQuery(event.target.value);
  };

  const getMore = () => {
    setPage(page + 1);
  };

  const fetchToGitHub = (q : string, perPage : number) => {
    // eslint-disable-next-line no-unused-expressions
    q && q.length > 2 && fetch(`https://api.github.com/search/repositories?q=${q}&per_page=20&page=${perPage}`)
      .then((response) => response.json())
      .then((obj) => obj.items)
      .then((res) => {
        // eslint-disable-next-line no-unused-expressions
        perPage > 1
          ? setResults((prevResults : any) => prevResults.concat(res))
          : setResults(res);
      });
  };

  const viewInfo = (info : Object) => {
    setViewRepo(info);
  };

  const addToFavorites = () => {
    const parsedLocalStarage : Object[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    parsedLocalStarage.push(viewRepo);
    localStorage.setItem('favorites', JSON.stringify(parsedLocalStarage) || '[]');
  };

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

        <Route path={viewRepo ? '/view' : '/search'}>
          <View info={viewRepo} addToFavorites={addToFavorites} />
        </Route>

        <Route path="/favorites">
          <Favorites viewInfo={viewInfo} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
