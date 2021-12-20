
import React from 'react'
import Kerasel from "../../components/Kerasel/Kerasel"
const Landing = () => {
  return (
    <div>
      <h4>action</h4>
      <Kerasel genre="action"/>
      <h4>sports</h4>
      <Kerasel genre="sports"/>
      <h4>strategy</h4>
      <Kerasel genre="strategy"/>
      <h4>RPG</h4>
      <Kerasel genre="role-playing-games-rpg"/>
    </div>
  )
}

export default Landing
