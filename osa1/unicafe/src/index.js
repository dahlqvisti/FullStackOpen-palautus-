/*
Rasmus Dahlqvist 
*/

import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const btnStyle = {
  
  display: 'inline-block'
  

};

const Button = (props) => {

  return (
    <div style={btnStyle}>
      <button onClick={() => props.set(props.btnName+1)}>{props.text}</button>

    </div>
  )
}

const StatisticsLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Statistics = (props) => {
  return (
    props.all === 0 ? <p>No feedback given</p> : 
    
      <table>
        <tbody>
      <tr><td><StatisticsLine text="good" value={props.good}/></td></tr>
     <tr><td><StatisticsLine text="neutral" value={props.neutral}/></td></tr> 
      <tr><td><StatisticsLine text="bad" value={props.bad}/></td></tr>
     <tr><td><StatisticsLine text="all" value={props.all}/></td></tr> 
      <tr><td><StatisticsLine text="average" value={props.average.toFixed(1)}/></td></tr>
      <tr>     
     <td><StatisticsLine text="positive" value={props.positive.toFixed(2)}/></td>
      <td>%</td>
      </tr>
     </tbody>
      </table>
          
  )
 
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad;
  let average = ((good) - (bad *-1)/ all) /10
  let positive = (good/all)*100

  return (
    <div>
      <h1>give feedback</h1>
      <Button style={btnStyle} btnName={good} set={setGood} text='good'/>
      <Button style={btnStyle} btnName={neutral} set={setNeutral} text='neutral'/>
      <Button style={btnStyle} btnName={bad} set={setBad} text='bad'/>

      <h1>statictis</h1>
      <Statistics good={good} neutral={neutral} bad={bad} 
      all={all} average={average} positive={positive} />
      
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)