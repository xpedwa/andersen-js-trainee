import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from './defaultComponents';
import Card from './Card';

function ListOfCards({list} : {list: []}) : JSX.Element {
  return (
    <>
      {
        list.map((card : {id: string, name: string, owner: any}) => (
          <Link to={`/view/${card.id}`} key={card.id}>
            <Card name={card.name}>
              <Avatar src={card.owner.avatar_url} alt={`${card.name}_logo`} />
            </Card>
          </Link>
        ))
      }
    </>
  );
}

export default ListOfCards;
