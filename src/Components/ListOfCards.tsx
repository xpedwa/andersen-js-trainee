import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Loader } from "./UIComponents";
import loader from "./loader.svg";
import Card from "./Card";
import { ICardInfo } from "../tsType";

function ListOfCards({
  list,
  loading,
}: {
  list: ICardInfo[];
  loading: boolean;
}): JSX.Element {
  return (
    <>
      {loading === true && <Loader src={loader} />}
      {!loading &&
        list.map((card: ICardInfo) => (
          <Link to={`/view/${card.id}`} key={card.id}>
            <Card name={card.name}>
              <Avatar src={card.owner.avatar_url} alt={`${card.name}_logo`} />
            </Card>
          </Link>
        ))}
    </>
  );
}

export default ListOfCards;
