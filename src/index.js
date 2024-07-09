import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import JoinGame from './components/JoinGame';
import Game from './components/Game';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/join" component={JoinGame} />
                <Route path="/game/:gameId" component={Game} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
