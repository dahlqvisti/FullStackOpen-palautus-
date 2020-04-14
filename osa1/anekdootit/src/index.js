/*
RASMUS DAHLQVIST
*/
import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const getRandom = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  
  let mostVotes = 0; 
 
const handleNextClick = () => {
  setSelected([getRandom(6)]);
}

  const copy = {...anecdotes};

  const handleVoteClick = () => {
   copy[selected].points += 1; 
   setSelected([selected]);
   
  }

  const Content = (props) => {
    return(
      <div>
        <p>{props.anecdotes[selected].anecdote} </p> 
        <p> has {props.copy[selected].points} votes</p>
      </div>
    ) 
  } 

mostVotes = Math.max(...anecdotes.map(value => value.points));
let mostVotedName = '';

for(let i = 0; i < anecdotes.length; i++) 
{
  if(anecdotes[i].points === mostVotes)
  {
    mostVotedName = anecdotes[i].anecdote;
  }
}
 
  return (
    <div>
      
      <h2>Anectode of the day</h2>
      <Content anecdotes={anecdotes} copy={copy}  />
      <button onClick={handleNextClick} > Next </button>
      <button onClick={handleVoteClick}> Vote </button>
     
      <h2>Anecdote with most votes</h2>
      <p>{mostVotedName} </p>
      <p> has {mostVotes} votes </p>
   
      
    </div>
  )
}



const anecdotes = [
 
  {anecdote: 'If it hurts, do it more often',  points: 0},
  {anecdote: 'Adding manpower to a late software project makes it later!', points: 0},
  {anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',points: 0},
  {anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',points: 0},
  {anecdote: 'Premature optimization is the root of all evil.',points: 0},
  {anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', points: 0}
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
