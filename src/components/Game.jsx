import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { drawCard, placeCard, startGame } from '../services/api';
import Card from './Card';

const Game = () => {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);
    const [currentCard, setCurrentCard] = useState(null);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        // Fetch game details and set the game state here
    }, [gameId]);

    const handleDrawCard = async () => {
        try {
            const token = localStorage.getItem('token');
            const player = { id: 'PLAYER_ID_FROM_CONTEXT' }; // replace with actual player id
            const response = await drawCard(gameId, player);
            setCurrentCard(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePlaceCard = async () => {
        try {
            const request = {
                player: { id: 'PLAYER_ID_FROM_CONTEXT' }, // replace with actual player id
                card: currentCard,
                position
            };
            const response = await placeCard(gameId, request);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Game ID: {gameId}</h2>
            {currentCard && <Card card={currentCard} />}
            <button onClick={handleDrawCard}>Draw Card</button>
            <input type="number" value={position} onChange={(e) => setPosition(e.target.value)} />
            <button onClick={handlePlaceCard}>Place Card</button>
        </div>
    );
};

export default Game;
