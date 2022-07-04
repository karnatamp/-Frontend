import Greeting from "./Components/Greeting"
import Animal from "./Components/Animal"
import React, { useContext } from 'react'
import Home from "./Pages/Home"
import RegisterPage from "./Pages/RegisterPage"
import Resources from "./Pages/Resources"
import LoginPage from "./Pages/LoginPage"

import {
  BrowserRouter,
  Routes,
  Route, 
  Link
} from "react-router-dom"
import ResourceComponent from "./Components/ResourceComponent"
const App=()=> {
  
  
  return (
    <>
    <div id="nav">
      <Link to="/">Home</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/registerpage">RegisterPage</Link>
      <Link to="/loginpage">LoginPage</Link>
     
    </div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/resources" element={<Resources />}/>
    <Route path="/registerpage" element={< RegisterPage />}/>
    <Route path="/loginpage" element={< LoginPage />}/>
  
    </Routes>

   
    </>
  )
}


export default App

function AuthContext(AuthContext: any) {
  throw new Error("Function not implemented.")
}
