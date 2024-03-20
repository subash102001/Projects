import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Hello from './Figma/Hello'
import Homes from './Homes'
import Dirty from './Dirty'
import AdvancedDataTable from './AdvanceDataTable'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/hello' element={<Hello/>}/>
          <Route path='/home' element={<Homes/>}/>
          <Route path='/dirty' element={<Dirty/>}/>
          <Route path='/ad' element={<AdvancedDataTable/>}/>
         
        </Routes>
      </div>

    </Router>
   
  )
}

export default App