import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = (props) => {

  const [name, setNewName] = useState("")
  const [number, setNewNumber] = useState("")
  const [persons, setPersons] = useState([
    { name : "Arto Hellas", number : "322-112-2223" , id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])

  const [filter, setFilter] = useState("")
  const [filterResults, setFilterResults] = useState(persons)


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

  const handleFilter = (e) => {
    e.preventDefault()
    const result = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
    )
    setFilterResults(result);
    setFilter("");
    console.log(result)
  }

  return (
      <div>
        <h1>Phonebook</h1>
        <Filter filer={filter} setFilter={setFilter}
                handleFilter={handleFilter} />
        <PersonForm onSubmit={handleSubmit}
                    name={name} number={number}
                    setNewName={setNewName}
                    setNewNumber={setNewNumber}/>
        <h2>Numbers</h2>
          <ul>
          { filterResults.map( person =>
            <Persons key={person.id} person={person}/>
          )}
          </ul>
      </div>
  )
}

export default App
