import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import CharacterDetail from './components/CharacterDetail';
import CharacterList from './components/CharacterList';
function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="App">
      {selectedCharacter ? (
        <CharacterDetail character={selectedCharacter} />
      ) : (
        <CharacterList onSelectCharacter={handleSelectCharacter} />
      )}
    </div>
  );
}

export default App;
