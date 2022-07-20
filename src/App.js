import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import Details from './components/Details'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/monster/:id' element={<Details />} />
    </Routes>
  )
}

export default App