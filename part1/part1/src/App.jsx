import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
    return(
      <>
        <p>{props.title} {props.number}</p>
      </>
    )
}

const Content = (props) => {
  return(
    <>
      <Part title={props.part1.title} number={props.part1.number}/>
      <Part title={props.part2.title} number={props.part2.number}/>
      <Part title={props.part3.title} number={props.part3.number}/>
    </>
  )
}

const Total = (props) =>{
  return (
    <>
      <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {"title" : "Fundamental of React", "number" : 10};
  const part2 = {"title" : "Using props to pass data", "number" : 7};
  const part3 = {"title" : "State of a component", "number" : 14};

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total part1={part1.number} part2={part2.number} part3={part3.number} />
    </div>
  )
}

export default App
