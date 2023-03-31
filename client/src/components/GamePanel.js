import React from 'react';
import './GamePanel.css'

function GamePanel(props) {
  return (
    <div className = "panel">
      <p className = "game-info" key = {props.game.slug}>{props.game.name}</p>
      <button type = "button" className = "add-button">Add!</button>
    </div>
  );

}

export default GamePanel;