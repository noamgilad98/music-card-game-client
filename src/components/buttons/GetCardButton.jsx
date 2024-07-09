import React from 'react';

const GetCardButton = ({ onAddCard, disabled }) => {
    return (
        <button onClick={onAddCard} disabled={disabled}>
            Get Card
        </button>
    );
};

export default GetCardButton;
