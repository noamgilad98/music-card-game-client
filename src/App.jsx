import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import CreateGame from './components/CreateGame';
import JoinGame from './components/JoinGame';
import Game from './components/Game';
import Profile from './components/Profile';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/game/create" component={CreateGame} />
                <Route path="/join" component={JoinGame} />
                <Route path="/game/:gameId" component={Game} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </Router>
    );
};

export default App;
