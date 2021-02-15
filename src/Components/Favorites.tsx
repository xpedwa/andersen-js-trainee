import React from 'react';

import { Panel, Avatar } from './defaultComponents';
import Card from './Card';

function Favorites(props : any) {  
  
  return (
    <Panel>
      {
        props.favorites.map( (card : any) => 
          <Card cardInfo={card} key={card.id}>
            <Avatar src={card.owner.avatar_url} alt={card.name + "_logo"}/>
          </Card>
        )
      }
    </Panel>
  );
}

export default Favorites;
