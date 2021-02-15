import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import { Button, Avatar } from './defaultComponents';

const ColumnDiv = styled.div<any>`
  display: flex;
  text-align: left;
  // grid-template-columns: repeat(3, auto);
`;

function View(props : any) {  
  return (
    <>
      <ColumnDiv>
        <Card name={props.info.name}>
          <Avatar src={props.info.owner.avatar_url} alt={props.info.name + "_logo"}/>
        </Card>
        <Card>
          homepage : {props.info.homepage}
          <br/>
          forks : {props.info.forks}
          <br/>
          size : {props.info.size}
          <br/>
          created: {new Date(Date.parse(props.info.created_at)).toLocaleDateString('ru-RU')}
        </Card>
      </ColumnDiv>
      <Button onClick={props.addToFavorites}>Add to Bookmark</Button>
      <Button onClick={props.rmFromFavorites}>Remove from Bookmark</Button>
    </>
    
  );
}

export default View;
