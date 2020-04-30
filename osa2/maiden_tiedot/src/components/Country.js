import React from 'react'
import OneCountry from './OneCountry'
import CountryWithButton from './CountryWithButton'
let queryCapital = '';
const Country = (props) => {

    
    
    if(props.filterList.length === 0) {return null}
    if(props.filterList.length > 10){
        return <p>Too many matches, specify another filter</p>
        
    }
    if(props.filterList.length > 1 && props.filterList.length <= 10) {
        return(
            <div>

            {props.filterList.map(country => 
            
                <CountryWithButton key={country.name} name={country.name}
                handleShowClick={() => props.handleShowClick(country)} />
            )}
   
            </div>
        )

  
    }
    if(props.filterList.length === 1 || props.clicked) {
      {queryCapital = props.filterList.map(country => country.capital)} 

        
      {queryCapital = queryCapital.toString()}
    
    {props.params.query = queryCapital}
        return(
            <div>
        
      

              
                 <OneCountry filterList={props.filterList}  weather={props.weather}/>
            </div>
        )
       
    }
    return null;
}




export default Country