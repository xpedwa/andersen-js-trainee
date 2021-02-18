import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "./Components/defaultComponents";
import Search from "./Components/Search";
import Favorites from "./Components/Favorites";
import View from "./Components/View";
import { cardInfo } from "./tsType";

function App(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [results, setResults] = useState<cardInfo[]>([]);

  const newSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setPage(1);
    setQuery(event.currentTarget.value);
  };

  const getMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    query &&
      query.length > 2 &&
      fetch(
        `https://api.github.com/search/repositories?q=${query}&per_page=20&page=${page}`
      )
        .then((response) => response.json())
        .then((obj) => obj.items)
        .then((res: cardInfo[]) => {
          page > 1
            ? setResults((prevResults: cardInfo[]) => prevResults.concat(res))
            : setResults(res);
        });
  }, [query, page]);

  return (
    <Router>
      <Link to="/search">
        <Button>Search</Button>
      </Link>
      <Link to="/favorites">
        <Button>Favorites</Button>
      </Link>

      <Switch>
        <Route path="/search">
          <Search
            newSearch={newSearch}
            query={query}
            getMore={getMore}
            results={results}
          />
        </Route>

        <Route
          path={"/view/:id"}
          component={({ ...routeProps }) => (
            <View id={routeProps.match.params.id} />
          )}
        />

        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
