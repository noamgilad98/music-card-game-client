import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { joinGame } from '../services/api';

const JoinGame = () => {
    const [gameId, setGameId] = useState('');
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const player = { name: username };
            await joinGame(gameId, player);
            history.push(`/game/${gameId}`);
        } catch (error) {
            console.error('Error joining game:', error);
        }
    };

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Join Game
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Game ID"
                        value={gameId}
                        onChange={(e) => setGameId(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Join Game
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default JoinGame;
