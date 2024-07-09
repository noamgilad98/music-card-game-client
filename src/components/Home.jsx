import React from 'react';
import { Container, Typography, Button, Box, Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    const username = localStorage.getItem('username');

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to Music Card Game
                </Typography>
                {!username ? (
                    <>
                        <Typography variant="h5" component="h2" gutterBottom>
                            New here? <MUILink component={Link} to="/register">Register</MUILink> or <MUILink component={Link} to="/login">Login</MUILink>
                        </Typography>
                    </>
                ) : (
                    <>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Hello, {username}
                        </Typography>
                        <Box mt={2}>
                            <Button variant="contained" color="primary" component={Link} to="/game/create">
                                Create Game
                            </Button>
                            <Button variant="contained" color="secondary" component={Link} to="/join" style={{ marginLeft: '10px' }}>
                                Join Game
                            </Button>
                        </Box>
                    </>
                )}
                <Box mt={4}>
                    <Typography variant="h6" component="h2">
                        About the Game
                    </Typography>
                    <Typography paragraph>
                        [Include details about the game rules, about the creator, and history of the game here.]
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;
