import React from 'react'

const CountryWithButton = (props) => {
    return(
        <div>
               
        <p>{props.name} <button 
       onClick={props.handleShowClick}>show</button> </p>
       
         
        </div>
    )
}



export default CountryWithButton