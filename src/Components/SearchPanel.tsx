import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const ResultsPanel = styled.div`
  display: grid;
  padding-top: 55px;

  text-align: center;
  
  @media screen and (max-width: 480px){
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 480px){
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (min-width: 768px){
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1920px){
    grid-template-columns: repeat(10, 1fr);
  }
`;

const Element = styled.div`
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

const Element__name = styled.div`
  padding: 2px 0;
  overflow-wrap: anywhere;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

function Results(props : any) {
  return (
    <ResultsPanel>
      {
        props.results.map( (element : any) => 
          <Element key={element.id} onClick={() => alert(element.url)}>
            <Avatar src={element.owner.avatar_url} alt={element.name + "_logo"}/>
            <Element__name>{element.name}</Element__name>
          </Element>
        )
      }
    </ResultsPanel>
  );
}

export default Results;
