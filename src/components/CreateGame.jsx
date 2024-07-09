import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { createGame } from '../services/api';

const CreateGame = () => {
    const [gameId, setGameId] = useState('');
    const history = useHistory();

    const handleCreateGame = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await createGame(token);
            setGameId(response.data.gameId);
            history.push(`/game/${response.data.gameId}`);
        } catch (error) {
            console.error('Error creating game:', error);
        }
    };

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create Game
                </Typography>
                <Button variant="contained" color="primary" onClick={handleCreateGame}>
                    Create Game
                </Button>
                {gameId && (
                    <Typography variant="h6" component="h2" style={{ marginTop: '20px' }}>
                        Game ID: {gameId}
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default CreateGame;
