import React from 'react'
import { useNavigate, useParams } from "react-router-dom"

function AboutMe() {
  let navigate = useNavigate()
  let { username } = useParams() 
  return (
    <div>
      <h1>This AboutMe component is rendered using /about route. It talks about {username}</h1>
      <ul>
        <li>useNavigate - allows us to render component from another route without full page re-render</li>
        <li>useNavigate same as useHistory in Router v5</li>
      </ul>
      <ol>
        <li>import useNavigate from react-router-dom</li>
        <li>assign useNavigate() method to a variable</li>
        <li>use navigate("/endpoint") to specify where you need to go</li>
        <li>navigate() must be used in a callback fx inside an event (onClick, onChange etc.)</li>
      </ol>
      <button onClick={ () => { navigate("/") }}>Go to Home.</button>
    </div>
  )
}

export default AboutMe