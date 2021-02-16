import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from './defaultComponents';
import Card from './Card';

function ListOfCards({ list, viewInfo } : { list:Object[], viewInfo:any }) {
  return (
    <>
      {
        list.map((card : any) => (
          <Link onClick={() => viewInfo(card)} to="/view" key={card.id}>
            <Card cardInfo={card} name={card.name}>
              <Avatar src={card.owner.avatar_url} alt={`${card.name}_logo`} />
            </Card>
          </Link>
        ))
      }
    </>
  );
}

export default ListOfCards;
