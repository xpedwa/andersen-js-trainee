import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "./UIComponents";
import Card from "./Card";
import { ICardInfo } from "../tsType";

function ListOfCards({ list }: { list: ICardInfo[] }): JSX.Element {
  return (
    <>
      {list.map((card: ICardInfo) => (
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
