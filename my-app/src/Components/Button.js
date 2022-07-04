import React, {useState} from 'react'

const Button = () => {
    let [Compteur, setcompteur] = useState(0)
    const onClickHandler =(event) =>{
       
        setcompteur(Compteur + 1)
        
        
    }
    const onClick =(event) =>{
      setcompteur(0)
    }

    const onset =(event) =>{
      setcompteur(Compteur +5)
    }
  return (<>
    <div>{Compteur}
    <button onClick ={onClickHandler}> INCREASE 1</button>
    <button onClick ={onClick}> RESET</button>
    <button onClick ={onset}> step 5</button>
    </div>
   
    </>)
}



export default Button