import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "./UIComponents";
import Search from "./Search";
import Favorites from "./Favorites";
import View from "./View";

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
