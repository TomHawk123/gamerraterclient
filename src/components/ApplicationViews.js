import React from "react"
import { Route } from "react-router-dom"
import { GameDetails } from "./games/GameDetails"
import { GamesList } from "./games/GameList"

export const ApplicationViews = () => {
  return <>
    <main style={{
      margin: "5rem 2rem",
      lineHeight: "1.75rem"
    }}>
      <Route exact path="/games">
        <GamesList />
      </Route>
      <Route exact path="/">
      </Route>
      <Route exact path="/games/:gameId(\d+)">
        <GameDetails />
      </Route>
      {/* <Route exact path="/games/new">
                <GameForm />
            </Route>
            <Route exact path="/games/edit/:gameId(\d+)">
                <GameForm />
            </Route>
            <Route exact path="/events">
                <EventList />
            </Route>
            <Route exact path="/events/new">
                <EventForm />
            </Route>
            <Route exact path="/events/edit/:eventId(\d+)">
                <EventForm />
            </Route> */}
    </main>
  </>
}