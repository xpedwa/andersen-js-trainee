import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Search from './Components/Search';
import {Button, Header, Panel} from './Components/defaultComponents';
import Favorites from './Components/Favorites';
import View from './Components/View';

function App() {
  return (
    <Router>
      <Link to="/search">F</Link>
      <Link to="/favorites">❤️</Link>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

        <Switch>
            <Route path="/search">
              <Search />
            </Route>

            <Route path="/view">
              <View />
            </Route>

            <Route path="/favorites">
              <Favorites />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
