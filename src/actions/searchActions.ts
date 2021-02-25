import { ICardInfo, ISearchState } from "../tsType";

export const GET_LISTOFCARDS = "GET_LISTOFCARDS";

export const FETCH_LISTOFCARDS = "FETCH_LISTOFCARDS";
export const FETCH_LISTOFCARDS_SUCCESS = "FETCH_LISTOFCARDS_SUCCESS";
export const FETCH_LISTOFCARDS_ERROR = "FETCH_LISTOFCARDS_ERROR";

export function getListOfCards(
  state: ISearchState
): (state: ISearchState) => void {
  const { query, page, listOfCards } = state;
  const url = `https://api.github.com/search/repositories?q=${query}&per_page=20&page=${page}`;

  return (dispatch: any) => {
    dispatch({
      type: GET_LISTOFCARDS,
      payload: state,
    });

    fetch(url)
      .then((res: any) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res.json();
        }
      })
      .then((data: any) => {
        let dataList: ICardInfo[] = [];
        if (page > 1) {
          dataList = listOfCards;
        }

        dispatch({
          type: FETCH_LISTOFCARDS_SUCCESS,
          payload: { ...state, listOfCards: dataList.concat(data.items) },
        });
      })
      .catch((error) => {
        error.then((data: any) => {
          dispatch({
            type: FETCH_LISTOFCARDS_ERROR,
            payload: data.message,
          });
        });
      });
  };
}
