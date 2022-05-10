import { fetchIt } from "../utils/Fetch"

const API = 'http://localhost:8000'

export const getGamers = () => fetchIt(`${API}/gamers`)