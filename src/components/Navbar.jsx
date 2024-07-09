import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link as MUILink } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    const username = localStorage.getItem('username');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        history.push('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Music Card Game
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                {username ? (
                    <>
                        <Button color="inherit" component={Link} to="/profile">{username}</Button>
                        <Button color="inherit" component={Link} to="/game/create">Create Game</Button>
                        <Button color="inherit" component={Link} to="/join">Join Game</Button>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/register">Register</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
