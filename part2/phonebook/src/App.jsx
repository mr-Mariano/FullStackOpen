import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Person from './components/Person'
import backend from "./services/backend"
import ErrorMsg from './components/ErrorMsg'
import SuccessMsg from "./components/SuccessMsg"


const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    backend
    .getAll()
    .then(data => setPersons(data))
  },[])

  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase());
    if (nameExists) {
      if(window.confirm(`${newName} is already in the Phonebook, replace the old number with a new one?`)){
        const personToUpdate = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
        backend
        .updateObject({
          ...personToUpdate,
          number : number
        })
        .then(data => {
          setPersons(persons.map(person => person.id !== personToUpdate.id ? person : data))
          setSuccess(`${personToUpdate.name} number was updated`)
        })
        .catch(error => {
          setError(`Information of ${personToUpdate.name} has already been removed from the server`)
          setTimeout(() => {
            setError(null)
          }, 5000)
        })
        setTimeout(() => setSuccess(null), 5000)
        setNewName("");
        setNumber("");
        setFilter("");
        return;
      }
    }else{
        const newPerson = {
          name: newName,
          number: number
        }
        backend
          .create(newPerson)
          .then(data => {
            setPersons(persons.concat(data))
          })
        setSuccess(`${newName} was added to the PhoneBook`)
        setTimeout(() => setSuccess(null), 5000)
        setNewName('')
        setNumber('')
        setFilter('')
        return;
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) =>{
    setNumber(e.target.value)
  }

  const handleFilterChange = (e) =>{
    setFilter(e.target.value)
  }

  const handleDelete = (id) => {
    console.log("deleting", id)
    const person = persons.find(person => person.id === id)
    if(window.confirm(`Do you really want to delete ${person.name}?`)){
      backend.deleteObject(id)
      .catch(error => {
        setError(`${person.name} could not be deleted`)
        setTimeout(() => {
          setError(null)
        }, 5000)
      })
      setSuccess(`${person.name} was correctly deleted`)
      setTimeout(() => {
        setSuccess(null)
      }, 5000)
      setPersons(persons.filter(person => person.id !== id))
    }else{
      console.log("not deleted")
    }
  }

  const filteredPeople = filter ? persons.filter( person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons

  return (
    <>
    <div>
      <ErrorMsg message={error}/>
      <SuccessMsg message={success}/>
    </div>
    <div>
      <h1>Phonebook</h1>
      <Filter
        filter={filter}
        handleChange={handleFilterChange}/>
    </div>

    <div>
      <h2>Add a New Contact</h2>
      <PersonForm
        newName={newName}
        number={number}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
    </div>
    <div>
      <h2>Numbers</h2>
      <Person people={filteredPeople}
              onDelete={handleDelete}
      />
    </div>
    </>
  )
}

export default App

