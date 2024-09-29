import React, { useState, useEffect } from 'react';
import { Card, Grid } from 'semantic-ui-react';

function CharacterList({ onSelectCharacter }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <Grid>
      {characters.map((character) => (
        <Grid.Column key={character.id}>
          <Card
            onClick={() => onSelectCharacter(character)}
            image={character.image}
            header={character.name}
            meta={character.species}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default CharacterList;
