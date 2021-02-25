import React from "react";
import { connect } from "react-redux";
import { getListOfCards } from "../actions/searchActions";
import { ISearchState } from "../tsType";

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

function StateWrapper(props: any) {
  return React.cloneElement(props.children, {
    searchState: props.searchState,
    getListOfCards: props.getListOfCards,
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(StateWrapper);
