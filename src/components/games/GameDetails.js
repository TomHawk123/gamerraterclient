import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getGameById } from "./GameManager";

export const GameDetails = () => {

  const [game, setGame] = useState({})
  const { gameId } = useParams()

  useEffect(
    () => {
      getGameById(gameId).then(setGame)
    },
    []
  )

  return (
    <>
      <section className="gameDetails">
        <h3 className="game-title">{game.title}</h3>
        <div className="game__players">
          {game.numberOfPlayers} players needed
        </div>
        <div className="game__ageReq">
          Age Recommendation is {game.ageReq}
        </div>
        <div className="game__estTimeMinutes">
          Est play time is {game.playTime} minutes
        </div>
        <div className="game__yearReleased">
          Year released is {game.yearReleased}
        </div>
      </section>
    </>
  )

}