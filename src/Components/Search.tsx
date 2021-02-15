import React from 'react';

import { Button, HotSearchInput, Avatar, Panel } from './defaultComponents';
import Card from './Card';
import { Link } from "react-router-dom";
import View from './View';

function Search(props : any) {
  const results = props.results;
  const query = props.query;
  const newQuery = props.newQuery;
  const getMore = props.getMore;
  const viewInfo = props.viewInfo;

  function Search__Results(props : any) {
    return (
      <Panel>
        {
          props.results.map( (card : any) => 
            <Link onClick={ () => viewInfo(card) } to={ "/view" } key={ card.id } >
              <Card cardInfo={ card } name={ card.name }>
                <Avatar src={ card.owner.avatar_url } alt={ card.name + "_logo" }/>
              </Card>
            </Link>
          )
        }
      </Panel>
    );
  }
  
  return (
    <div>
      <HotSearchInput onChange={ newQuery } value={ query }placeholder="Search by GitHub repository"/>

      <Search__Results results={ results }/>
      <Button onClick={ getMore } hidden={ results.length === 0 }>Load More</Button>
    </div>
  );
}

export default Search;
