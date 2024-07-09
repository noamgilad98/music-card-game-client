import React from 'react';

const SubmitButton = ({ onSubmit }) => {
    return (
        <button onClick={onSubmit}>
            Submit Card
        </button>
    );
};

export default SubmitButton;
