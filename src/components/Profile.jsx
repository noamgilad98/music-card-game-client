import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Profile = () => {
    const username = localStorage.getItem('username');

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Profile
                </Typography>
                <Typography variant="h6" component="h2">
                    Username: {username}
                </Typography>
            </Box>
        </Container>
    );
};

export default Profile;
