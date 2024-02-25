import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  )
}

const Content = ({course}) => {
  const parts = course.parts;
  return (
    <>
      {parts.map(part =>
        <Part key={part.id} title={part.title} exercises={part.exercises}/>
      )}
    </>
  )
}

const Part = ({title, exercises}) => {
  return (
    <>
      <p>{title} : {exercises}</p>
    </>
  )
}

const Total = ({total}) => {
  let sum = 0
  for(let i = 0; i < total.parts.length ; i++){
    sum += total.parts[i].exercises;
  }
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}

const App = () => {
  const course = {
    id : 1,
    name :'Half Stack application development',
    parts : [
      { id:1, title:'Fundamentals of React', exercises: 10},
      { id:2, title:'Using props to pass data', exercises : 7},
      { id:3, title: 'State of a component', exercises : 14}
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total total={course}/>
    </div>
  )
}

export default App