import React, { useContext } from 'react'
import Greeting from '../Components/Greeting'
import { AuthContext } from '../Contexts'
import Resources from './Resources'

const Home = () => {
  const auth= useContext(AuthContext)
  return (<>
    
    <div>
      Welcome {auth.name}
    </div>
    </>
  )
}

export default Home


//run yarn add sass in terminal