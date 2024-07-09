import axios from 'axios';

const API_URL = 'http://localhost:8081';

const register = (username, password) => axios.post(`${API_URL}/auth/register`, { username, password });
const login = (username, password) => axios.post(`${API_URL}/auth/login`, { username, password });
const createGame = (token) => axios.post(`${API_URL}/game/create`, null, { headers: { Authorization: `Bearer ${token}` } });
const startGame = (gameId) => axios.post(`${API_URL}/game/${gameId}/start`);
const joinGame = (gameId, player) => axios.post(`${API_URL}/player/join/${gameId}`, player);
const drawCard = (gameId, player) => axios.post(`${API_URL}/game/${gameId}/drawCard`, player);
const placeCard = (gameId, request) => axios.post(`${API_URL}/game/${gameId}/placeCard`, request);
const getCard = (playerId) => axios.get(`${API_URL}/game/get-card?playerId=${playerId}`);
const submitAndValidate = (playerId, card) => axios.post(`${API_URL}/game/submit-and-validate`, { playerId, card });

export { register, login, createGame, startGame, joinGame, drawCard, placeCard, getCard, submitAndValidate };
