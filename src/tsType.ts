export interface ICardInfo {
  id: string;
  name: string;
  owner: { avatar_url: string };
}

export type stringState = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];
