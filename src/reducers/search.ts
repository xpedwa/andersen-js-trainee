import { SET_PAGE, SET_QUERY, SET_RESULT } from "../actions/searchActions";

const initialState = {
  query: "",
  page: 1,
  results: [],
};

export function searchReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload };

    case SET_PAGE:
      return { ...state, page: action.payload };

    case SET_RESULT:
      return { ...state, results: action.payload };

    default:
      return state;
  }
}
