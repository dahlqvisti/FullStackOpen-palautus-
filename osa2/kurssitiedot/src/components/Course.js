import React from "react"


const Header = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
      </div>
    )
  }
  
  
  const Part = (props) => {
    return (
      <div>
       
       <p>{props.name} {props.exercises}</p>
    
    </div>
    )
  }
  
  
  const Course = (props) => {
    return (
      <div>
         {props.courses.map((item, index) => (
           <div key={item.id}>
      <Header name={item.name}/>
      {item.parts.map((part, i) => (
        <div key={part.id}> 
          <Part name={part.name} exercises={part.exercises}/>
        </div>
       
      ))}
      <Total item={item}/>
      
    </div>
      
  ))}
        
      </div>
    )
    
  }
  
  
  const Total = (props) => {
    return (
      <div>
          <h4>total of exercises {props.item.parts.reduce((acc, currValue) => acc + currValue.exercises, 0)}</h4>
    </div>
    )
  }
  
  export default Course;