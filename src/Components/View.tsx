import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import { Button, Avatar } from './defaultComponents';

const ColumnDiv = styled.div<any>`
  display: flex;
  text-align: left;
`;

function View({ info, addToFavorites } : any) {
  return (
    <>
      <ColumnDiv>
        <Card name={info.name}>
          <Avatar src={info.owner.avatar_url} alt={`${info.name}_logo`} />
        </Card>
        <Card>
          homepage :
          {' '}
          {info.homepage}
          <br />
          forks :
          {' '}
          {info.forks}
          <br />
          size :
          {' '}
          {info.size}
          <br />
          created:
          {' '}
          {new Date(Date.parse(info.created_at)).toLocaleDateString('ru-RU')}
        </Card>
      </ColumnDiv>
      <Button onClick={addToFavorites}>Add to Bookmark</Button>
    </>

  );
}

export default View;
