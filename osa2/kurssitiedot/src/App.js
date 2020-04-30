import React from 'react'
import Course from './components/Course'
import courses from './courses'

const App = () => {

return (
    <div>

   <h1>Web development curriculum</h1>
    <Course courses={courses} /> 

    </div>
  )
}

export default App