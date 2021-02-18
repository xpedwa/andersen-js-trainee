import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Button, Avatar } from "./defaultComponents";
import { ICardInfo } from "../tsType";
import defaultAvatar from "../defaultAvatar.png";

const ColumnDiv = styled.div`
  display: flex;
  text-align: left;
`;

function View({ id }: { id: string }): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [repository, setRepository] = useState<any>({
    owner: { avatar_url: defaultAvatar },
  });

  const addToFavorites = () => {
    const name: string = repository.name;
    const owner: { avatar_url: string } = repository.owner;

    const parsedLocalStarage: ICardInfo[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    // convert ICardInfo to array of strings
    const set = new Set(parsedLocalStarage.map((item) => JSON.stringify(item)));
    // add unique string
    set.add(JSON.stringify({ id, name, owner }));
    // convert back
    const newParsedLocalStarage: ICardInfo[] = Array.from(set).map((item) =>
      JSON.parse(item)
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(newParsedLocalStarage) || "[]"
    );
  };

  useEffect(() => {
    fetch(`https://api.github.com/repositories/${id}`)
      .then((response) => response.json())
      .then((repositoryInfo) => setRepository(repositoryInfo));
  }, [id]);

  return (
    <>
      <ColumnDiv>
        <Card name={repository.name}>
          <Avatar
            src={repository.owner.avatar_url}
            alt={`${repository.name}_logo`}
          />
        </Card>

        <Card>
          <>
            homepage:{repository.homepage}
            <br />
            forks:{repository.forks}
            <br />
            size:{repository.size}
            <br />
            created:
            {new Date(Date.parse(repository.created_at)).toLocaleDateString(
              "ru-RU"
            )}
          </>
        </Card>
      </ColumnDiv>

      <Button onClick={addToFavorites}>Add to Bookmark</Button>
    </>
  );
}

export default View;
