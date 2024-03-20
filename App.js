import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './Login'
import Sign from './Sign'
import Go from './Go'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/sign' element={<Sign/>}/>
          <Route path='/go' element={<Go/>}/>
          <Route path='/imo' element={<Imo/>}/>
          
          
          
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
