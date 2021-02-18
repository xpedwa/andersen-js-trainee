import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "./defaultComponents";
import Card from "./Card";
import { cardInfo } from "../tsType";

function ListOfCards({ list }: { list: cardInfo[] }): JSX.Element {
  return (
    <>
      {list.map((card: cardInfo) => (
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
