import { fetchIt } from "../utils/Fetch"

const API = "http://localhost:8000"

export const getGames = () => fetchIt(`${API}/games`)

export const createGame = newGame => fetchIt(`${API}/games/create`, "POST", newGame)

export const getGameById = id => fetchIt(`${API}/games/${id}`)