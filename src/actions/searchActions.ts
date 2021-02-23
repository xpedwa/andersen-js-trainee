import { ICardInfo } from "../tsType";

export const SET_QUERY = "SET_QUERY";
export const SET_PAGE = "SET_PAGE";
export const SET_RESULT = "SET_RESULT";

export function setQuery(query: string) {
  return {
    type: SET_QUERY,
    payload: query,
  };
}

export function setPage(page: number) {
  return {
    type: SET_PAGE,
    payload: page,
  };
}

export function setResults(cardsList: ICardInfo[]) {
  return {
    type: SET_RESULT,
    payload: cardsList,
  };
}
