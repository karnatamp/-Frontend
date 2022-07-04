import React from 'react'
type GreetingParams={
    firstname:string,
    lastname:string,
    age?:number
}
const Greeting =({firstname,lastname}:GreetingParams)=>{
    return(
        <div>Hello {firstname} {lastname}!</div>
    )
}
export default Greeting



