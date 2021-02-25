export interface ICardInfo {
  id: string;
  name: string;
  owner: { avatar_url: string };
}

export interface ISearchState {
  query: string;
  page: number;
  listOfCards: ICardInfo[];
}
