import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "./Components/defaultComponents";
import Search from "./Components/Search";
import Favorites from "./Components/Favorites";
import View from "./Components/View";

function App(): JSX.Element {
  const cashedQuery = useState<string>("");

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
          <Search cashedQuery={cashedQuery} />
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
