import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Adminhome from './Components/Adminhome'
import Dashboard from './Components/Dashboard'
import Adminlogin from './Components/Adminlogin'
import Managerlogin from './Components/Managerlogin'
import Slogin from './Components/slogin'
import Sregister from './Components/sregister'
import Mregister from './Components/mregister'
import Aregister from './Components/aregister'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ah" element={<Adminhome/>} />
        <Route path="/admlogin" element={<Adminlogin/>}/>
         <Route path="/mlogin" element={<Managerlogin/>} />
         <Route path="/slogin" element={<Slogin/>}/>
         <Route path="/sregister" element={<Sregister/>}/>
         <Route path="/mregister" element={<Mregister/>}/>
         <Route path="/aregister" element={<Aregister/>}/>
      </Routes>
     
    </div>
  )
}

export default App