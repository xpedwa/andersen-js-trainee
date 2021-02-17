import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from './Card';
import { Button, Avatar } from './defaultComponents';
import defaultAvatar from '../defaultAvatar.png';

const ColumnDiv = styled.div`
  display: flex;
  text-align: left;
`;

function View(addToFavorites: any, id : string) : JSX.Element{
  const [viewedRepository, setViewedRepository] = useState<any>({owner: {avatar_url: defaultAvatar}});

  useEffect(() => {
    fetch(`https://api.github.com/repositories/${id}`)
      .then(res => res.json())
      .then(viewedData => setViewedRepository(viewedData))
  }, [id]);

  return (
    <>
      <ColumnDiv>
        <Card name={viewedRepository.name}>
          <Avatar src={viewedRepository.owner.avatar_url} alt={`${viewedRepository.name}_logo`} />
        </Card>

        <Card>
          <>
            homepage:{viewedRepository.homepage }
            <br />
            forks:{viewedRepository.forks}
            <br />
            size:{viewedRepository.size}
            <br />
            created:{new Date(Date.parse(viewedRepository.created_at)).toLocaleDateString('ru-RU')}
          </>
        </Card>
      </ColumnDiv>

      <Button onClick={() => addToFavorites(viewedRepository)}>Add to Bookmark</Button>
    </>

  );
}

export default View;
