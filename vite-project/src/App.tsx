import Greeting from "./Components/Greeting"
import Animal from "./Components/Animal"
import React, { useContext } from 'react'
import Home from "./Pages/Home"
import RegisterPage from "./Pages/RegisterPage"
import Resources from "./Pages/Resources"
import LoginPage from "./Pages/LoginPage"
import MessagesPage from "./Pages/MessagesPage"
import Default from "./layouts/Default"
import Auth from "./layouts/Auth"
import ResourceComponent from "./Components/ResourceComponent"
import MessagesDeletePage from "./Pages/MessagesDeletePage"
import MessagesEditPage from "./Pages/MessagesEditPage"
import {
  BrowserRouter,
  Routes,
  Route, 
  Link
} from "react-router-dom"



const App=()=> {
  
  
  return ( <>
    <Routes>
      <Route path="/" element={<Default><Home /></Default>} />
      
      
      <Route path="/messages/:messageId/delete" element={<Default><MessagesDeletePage /></Default>} />
      <Route path="/messages/:messageId/edit" element={<Default><MessagesEditPage /></Default>} />
      <Route path="/resources" element={<Default><Resources /></Default>}/>
      <Route path="/registerpage" element={<Auth>< RegisterPage /></Auth>}/>
      <Route path="/loginpage" element={<Auth>< LoginPage /></Auth>}/>
      <Route path="/messagespage" element={< MessagesPage />}/>
      <Route path="/resourcecomponent" element={<Default><ResourceComponent /></Default>}/>
    </Routes>

   
    </>)
}
  


export default App