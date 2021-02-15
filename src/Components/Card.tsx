import React from 'react';
import styled from 'styled-components';
// import { Card, Card__name, Avatar } from './defaultComponents';

const CardDiv = styled.div`
  padding: 10px;
  
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 1px #8080809f;
  text-align: center;

  &:hover {
    background: bisque;
    cursor: pointer;
  }
`;

const Card__name = styled.div`
  padding: 2px 0;
  overflow-wrap: anywhere;
`;

function Card(props : any) {  
  const card = props.cardInfo;

  return (
    <CardDiv >
      {props.children}
      <Card__name>{card.name}</Card__name>
    </CardDiv>
  );
}

export default Card;


