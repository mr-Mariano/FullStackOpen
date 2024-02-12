import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const StaticsLine = (props) =>{
  return(
    <>
      <td>{props.text} {props.stat}</td>
    </>
  )
}

const Statistics = (props) => {
  const stats = {...props.stats}
  const average = stats.average;
  if(props.all < 1){
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return(
    <>
      <table>
        <tbody>
          <tr>
            <StaticsLine text="Good" stat={stats.good}/>
          </tr>
          <tr>
            <StaticsLine text="Neutral" stat={stats.neutral}/>
          </tr>
          <tr>
            <StaticsLine text="Bad" stat={stats.bad}/>
          </tr>
          <tr>
            <StaticsLine text="All" stat={stats.all}/>
          </tr>
          <tr>
            <StaticsLine text="Average" stat={stats.average}/>
          </tr>
          <tr>
            <StaticsLine text="Positive" stat={stats.positive}/>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0);
  const average = good - bad + neutral / all;
  const positive = (good / all) * 100;
  const stats = {
    good : good,
    neutral : neutral,
    bad : bad,
    positive : positive.toFixed(1) + '%',
    average : average.toFixed(1),
    all : all
  }

  const handleGood = () =>{
    setGood(good+1);
    setAll(all+1);
  }

  const handleNeutral = () =>{
    setNeutral(neutral+1);
    setAll(all+1);
  }

  const handleBad = () =>{
    setBad(bad+1);
    setAll(all+1);
  }

  return (
    <div>
      <h1>Give Feedback </h1>
        <Button handleClick={handleGood} text="Good"/>
        <Button handleClick={handleNeutral} text="Neutral"/>
        <Button handleClick={handleBad} text="Bad"/>
        <h1>Statistics</h1>
        <Statistics stats={stats} all={all}/>
    </div>
  )
}


export default App
