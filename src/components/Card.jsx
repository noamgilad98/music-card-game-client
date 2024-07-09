// src/components/Card.jsx
import React from 'react';

const Card = ({ card }) => {
    return (
        <div className="card">
            <h3>{card.songTitle}</h3>
            <p>{card.artist}</p>
            <p>{card.year}</p>
            <audio controls src={card.previewUrl}></audio>
        </div>
    );
};

export default Card;
