// client/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

import PlayerProfile from './components/PlayerProfile'

function App() {
  const [playerTag, setPlayerTag] = useState('')
  const [playerData, setPlayerData] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/players/${playerTag}`)

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const jsonData = await response.json();
      setPlayerData(jsonData)
      setError(null) //reset error 
    } catch (error) {
      console.error('Error fecthing player data:', error);
      setPlayerData(null) //reset player data
      setError('Error fetching player data')
    }
  }

  const handleInputChange = (event) => {
    setPlayerTag(event.target.value);
  }


  return (
    <div className="App">
      <div className="player-search-container">
        <h1 className="coc-search-text">COC Player Search</h1>
        <form onSubmit={handleSubmit}>
          <label className="coc-search-text">
            Enter Player Tag:
            <input
              type="text"
              value={playerTag}
              onChange={handleInputChange}
              placeholder="#PlayerTag" />
          </label>
          <button type="submit">Search</button>
        </form>

      </div>


      {error && <p className="error">{error}</p>}

      {playerData && (
        < div className="player-data">
          <h2 className="player-label">Player Data</h2>
          <PlayerProfile playerData={playerData} />
        </div>
      )}




    </div>
  );
}

export default App;
