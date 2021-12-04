import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AppNavbar from './Components/AppNavbar/AppNavbar'
import Homepage from './Components/HomePage/Homepage'

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route  path='/' element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App
