import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Api from './Api';
import Effcet from './Effcet';
import Fetch1 from './Fetch1';




function App() {
  return (
    <Router>
      <div>
        <Routes>
         <Route path='/api' element={<Api/>}/>
         <Route path='/effect' element={<Effcet/>}/>
         <Route path='/fetchs' element={<Fetch1/>}/>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
