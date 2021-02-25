import React, { useEffect, useState } from "react";
import { Button, Panel } from "./UIComponents";
import ListOfCards from "./ListOfCards";
import { ICardInfo } from "../tsType";

function Favorites(): JSX.Element {
  const [favoritesList, setFavoritesList] = useState<ICardInfo[]>(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  const clearAllFromFavorites = () => {
    setFavoritesList([]);
  };

  useEffect(
    () => localStorage.setItem("favorites", JSON.stringify(favoritesList)),
    [favoritesList]
  );

  if (!favoritesList[0]) {
    return <div>Empty</div>;
  } else {
    return (
      <>
        <Panel>
          <ListOfCards list={favoritesList} loading={false} />
        </Panel>
        <Button onClick={clearAllFromFavorites}>
          Clear all from Favorites
        </Button>
      </>
    );
  }
}

export default Favorites;
