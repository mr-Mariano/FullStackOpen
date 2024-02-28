import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './components/Course'


const App = ({notes}) => {
  const [notes, setNotes] = useState(notes)
  const course = [
    {
    id : 1,
    name :'Half Stack application development',
    parts : [
      { id:1, title:'Fundamentals of React', exercises: 10},
      { id:2, title:'Using props to pass data', exercises : 7},
      { id:3, title: 'State of a component', exercises : 14},
      { id:4 , title: 'Redux', exercises: 11}
    ]
  },
  {
    id: 2,
    name: 'Node.js',
    parts: [
      { id: 1, title : 'Routing', exercises: 3},
      { id:2, title: 'Middlewares', exercises: 7},
    ]
  }
]
  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App