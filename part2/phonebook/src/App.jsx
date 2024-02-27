import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Note from "./components/Note"

const App = (props) => {
  const [filter, setNewFilter] = useState("")
  const [name, setNewName] = useState("")
  const [number, setNewNumber] = useState("")
  const [persons, setPersons] = useState([
    {
      id:1,
      name : "Arto Hellas",
      number : "322-112-2223"
    }])


  const handleSubmit = (e) => {
    e.preventDefault()
    const alertCondition = (name) => persons.some(person => person.name === name)
    if(alertCondition(name)){
      alert(name +" is already added to the phonebook")
    }else{
      const newPerson = {
        id : persons.length + 1,
        name : name,
        number: number
      }
      setPersons(persons.concat(newPerson))
      setNewName("")
      setNewNumber("")
    }
  }

  return (
      <div>
        <h1>Phonebook</h1>
        <div>
          <form onSubmit={handleFilter}>
            <label htmlFor="filter" value={filter} handleChange={e => setNewFilter(e.target.value)}>Filter shown with</label>
            <input name="filter"/>
          </form>
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Add a new contact</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input name="name" value={name} onChange={e => setNewName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='number'> Number: </label>
            <input name="number" value={number} onChange={e => setNewNumber(e.target.value)}/>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <h2>Numbers</h2>
          <ul>
          { persons.map( person =>
            <li key={person.id}>{person.name}, {person.number}</li>
          )}
          </ul>
      </div>
  )
}

export default App
