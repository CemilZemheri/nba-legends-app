import { useState } from "react";

import "../App.css";

const PlayerCard = ({ players, search }) => {
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );
  const [showStats, setShowStats] = useState(Array(players.length).fill(false));
 
  const handlePlayerClick = (index) => {
    
    setShowStats(showStats.map((item, term) => (term === index ? !item : item)));
  };
  return (
    <div className="player-card">
      {filteredPlayers.map((item, index) => (
        <div
          key={item.name}
          className="card"
          onClick={() => handlePlayerClick(index)}
        >
          {showStats[index] ? (
            <div>
                          <ul className="list">
                {item.statistics.map((stat, term) => (
                  <li key={term}>{stat}</li>
                ))}
              </ul>
            </div>
          ) : (
           
            <div className="imageBox">
              <img src={item.img} alt={item.name} className="images" />
            </div>
          )}
          <div className="playerNameBox">
            <p className="playerNameText">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PlayerCard;