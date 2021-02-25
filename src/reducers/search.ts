import { ISearchState } from "../tsType";
import {
  GET_LISTOFCARDS,
  FETCH_LISTOFCARDS_SUCCESS,
  FETCH_LISTOFCARDS_ERROR,
} from "../actions/searchActions";

const initialState: ISearchState = {
  query: "",
  page: 1,
  listOfCards: [],
  loading: false,
};

export function searchReducer(
  state = initialState,
  action: { type: string; payload: any }
): any {
  switch (action.type) {
    case GET_LISTOFCARDS:
      return action.payload;

    case FETCH_LISTOFCARDS_SUCCESS:
      return action.payload;

    case FETCH_LISTOFCARDS_ERROR:
      console.error(action.payload);
      alert(action.payload + "\nTRY AFTER 30 SECONDS");
      return initialState;

    default:
      return state;
  }
}
