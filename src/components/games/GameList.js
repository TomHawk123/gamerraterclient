import React, { useEffect, useState } from "react";
import { getGames } from "./GameManager";


export const GamesList = (props) => {
  const [games, setGames] = useState([])


  useEffect(
    () => {
      getGames().then(setGames)
    }, [])

  return (
    <>
      {
        games.map(game => {
          return <section key={`game--${game.id}`} className="game">
            <div className="game--title">
              {game.title}
            </div>
          </section>
        })
      }
    </>
  )
}