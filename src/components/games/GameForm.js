import React, { useState } from "react"
import { getGamers } from "../gamers/GamerManager"


export const GameForm = () => {
  const [currentGame, setCurrentGame] = useState({})
  const [gamer, setGamer] = useState([])

  useEffect(
    () => {
      getGamers().then(setGamer)
    },
    []
  )

  const changeGameState = e => {
    const newGame = Object.assign({}, currentGame)
    newGame[e.target.name] = e.target.value
    setCurrentGame(newGame)
  }

  const constructNewGame = () => {
    createGame({
      title: currentGame.title,
      description: currentGame.description,
      designer: currentGame.designer,
      yearReleased: parseInt(currentGame.yearReleased),
      numberOfPlayers: parseInt(currentGame.numberOfPlayers),
      playTime: parseInt(currentGame.playTime),
      ageReq: parseInt(currentGame.ageReq),
      gamerId: parseInt(currentGame.gamerId)
    })
      .then(() => history.pushState("/games"))
  }

  return (
    <>
      {/* Create form for game creation and eventually game editing */}
    </>
  )
}

