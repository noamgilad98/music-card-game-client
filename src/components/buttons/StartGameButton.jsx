import React, { useState } from 'react';

const StartGameButton = ({ onStartGame }) => {
    const [playerName, setPlayerName] = useState('');

    const handleClick = () => {
        if (playerName) {
            onStartGame(playerName);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
            />
            <button onClick={handleClick}>Start Game</button>
        </div>
    );
};

export default StartGameButton;
