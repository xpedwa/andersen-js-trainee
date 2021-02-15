import React from 'react';

import { Panel, Avatar } from './defaultComponents';
import Card from './Card';
import { Link } from 'react-router-dom';

function Favorites(props : any) {
  const favorites : [{}] = JSON.parse(localStorage.getItem('favorites') || '[]');
  
  return (
    <Panel>
      {
        favorites.map( (card : any) => 
          <Link onClick={ () => props.viewInfo(card) } to={ "/view" } key={ card.id } >
            <Card cardInfo={ card } name={ card.name } >
              <Avatar src={ card.owner.avatar_url } alt={card.name + "_logo"}/>
            </Card>
          </Link>
        )
      }
    </Panel>
  );
}

export default Favorites;
