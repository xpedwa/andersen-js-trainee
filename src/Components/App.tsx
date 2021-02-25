import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getListOfCards } from "../actions/searchActions";

import { Button } from "./UIComponents";
import { ISearchState } from "../tsType";

import Search from "./Search";
import Favorites from "./Favorites";
import View from "./View";

const mapStateToProps = (store: { search: ISearchState }) => {
  return {
    searchState: store.search,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getListOfCards: (
      searchState: ISearchState
    ): ((searchState: ISearchState) => void) =>
      dispatch(getListOfCards(searchState)),
  };
};

function App(props: any): JSX.Element {
  const { getListOfCards } = props;

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
            searchState={props.searchState}
            getListOfCards={getListOfCards}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
