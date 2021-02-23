import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";
import { setPage, setQuery, setResults } from "../actions/searchActions";

import { Button } from "./UIComponents";
import { ICardInfo } from "../tsType";

import Search from "./Search";
import Favorites from "./Favorites";
import View from "./View";

const mapStateToProps = (store: any) => {
  return {
    search: store.search,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setStore: {
      setQuery: (query: string) => dispatch(setQuery(query)),
      setPage: (page: number) => dispatch(setPage(page)),
      setResults: (cardsList: ICardInfo[]) => dispatch(setResults(cardsList)),
    },
  };
};

function App(props: any): JSX.Element {
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
          <Search searchState={props.search} setStore={props.setStore} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
