import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
              <Link to={`/games/${game.id}`}>
                {game.title}
              </Link>
            </div>
          </section>
        })
      }
    </>
  )
}