import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '../src/styles/index.scss'
import { AuthContext } from './Contexts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContext.Provider value={{name: "praveen"}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContext.Provider>
  </React.StrictMode>
)
