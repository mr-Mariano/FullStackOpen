import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
  return(
    <div>
      <p>Hello {props && props.name ? props.name.toString() : "World"}</p>
    </div>
  )
}



const App = () => {
  return (
    console.log('Hello World'),
    <>
      <div>
          <h1>Greetings</h1>
          <Hello name="Mariano"/>
      </div>
    </>
  )
}

export default App
