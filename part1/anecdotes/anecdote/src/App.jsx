import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Highest = (props) =>{
  if(!props.votes){
    return(
      <>
        <p>No Votes yet</p>
      </>
    )
  }
  return (
    <>
      <p>{props.anecdote}</p>
      <p>{props.votes}</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const [highest, setHighest] = useState({})

  const getRandomAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
    return random;
  }

  const handleVote = () => {
    const newVotes = {...votes}
      if (newVotes[anecdotes[selected]]){
        newVotes[anecdotes[selected]] += 1;
      } else {
        newVotes[anecdotes[selected]] = 1;
      }

      setVotes(newVotes)

      if (!highest.vote || newVotes[anecdotes[selected]] > highest.vote) {
        setHighest({anecdote: anecdotes[selected], vote: newVotes[anecdotes[selected]]});
      }
  }


  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <p>Votes {votes[anecdotes[selected]]}</p>
      <div>
        <button onClick={handleVote}>Vote</button>
      </div>
      <div>
        <button onClick={getRandomAnecdote}>Get an Anecdote</button>
      </div>
      <div>
        <Highest anecdote={highest.anecdote} votes={highest.vote}/>
      </div>
    </div>
  )
}

export default App
