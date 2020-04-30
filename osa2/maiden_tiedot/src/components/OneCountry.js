import React from 'react'

const OneCountry = (props) => {
    return (
      <div>
         {props.filterList.map((country,i) => (
         <React.Fragment key={country.name}>
         <h2>{country.name} </h2>
         <p>capital: {country.capital}</p>
         <p>population: {country.population}</p>
          
         </React.Fragment>
         ))}
        <h3>languages</h3>
        {props.filterList.map(country => 
     country.languages.map(language => <li key={language.name}>
            {language.name}
         </li>))}

          {props.filterList.map((country,i) => (
         <React.Fragment key={country.name}>
         <img alt='flag' src={country.flag} width='100' />
            
         </React.Fragment>         
           
    ))}

          {props.filterList.map((country,i) =>(
         
            <h3>Weather in {country.name}</h3>
          ))}
          
         <h4>temperature {props.weather.current.temperature} Celcius</h4>
         <img alt='flag' src={props.weather.current.weather_icons[0]} width='100' />
       
         <h4>wind {props.weather.current.wind_speed} direction {props.weather.current.wind_dir}</h4> 
 
   
      
    </div>
          )
  }

  export default OneCountry