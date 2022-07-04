import React from 'react'

const Animal = () => {
    let animals:string[]=['lion','pavan', 'bear']
  return (<>
    <div>Animal</div>
    <ul>
        {animals.map((animal,index)=>
        <li key={`animal-${index}`}>{animal}</li>)}
    </ul>
    </>)
}

export default Animal