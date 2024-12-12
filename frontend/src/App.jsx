import React from 'react'
import HOMe from './Home/HOMe'

import { Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './components/Signup'

const App = () => {
  return (
    <div>
    
    <Routes className="dark:bg-slate-900 dark:text-white">
      <Route path='/' element={<HOMe/>}/>
      <Route path='/Course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
  )
}

export default App