import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'

import Country from './components/Country'





const App = () => {
    const [countries, setCountries] = useState([]); 
    const [showCountries, setShow] = useState(false); 
    const [clicked, setClicked] = useState(false)
    const [filterList, setFilterList] = useState([]); 
    const [weather, setWeather] = useState([])

  let params = {
    access_key: process.env.REACT_APP_API_KEY,
    query: 'Vancouver'
  }
  

    


const getWeather = () => {
  axios
  .get('http://api.weatherstack.com/current', {params})
  .then(response => {
    
    setWeather(response.data) 
    console.log('parametri query getweatherin sisalla', params.query)

  })
 
  }


    
    // Haetaan maiden data apista
    const hook = () => {
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {

            
            setCountries(response.data)
          })
      }

      useEffect(hook, [])
      useEffect(getWeather, [filterList])

      
      let filtered = '';
      let chosenOne = [];
      const handleFilterChange = (event) => {
       
        filtered = countries.filter(country => country.name.toUpperCase().includes(event.target.value.toUpperCase()));
        
        setFilterList(filtered);
          } 
    
 
    const countriesToShow = showCountries ? filterList : countries; 
 
    const handleShowClick = (country) => {
        setClicked(true)
        chosenOne = country
        filtered = countries.filter(country => country.name === chosenOne.name)
        setFilterList(filtered)
        
        
    }

    
    return (
        <div>
           
            
            <Filter handleFilterChange={handleFilterChange} />

            <Country filterList={filterList}
            handleShowClick={handleShowClick}
            clicked={clicked}
            weather={weather}
            params={params}
            
             />
      
    
    </div>
    )
}

export default App;
