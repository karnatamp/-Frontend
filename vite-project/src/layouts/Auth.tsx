import React, {FC, ReactNode} from 'react'

const Auth: FC<{children:ReactNode}> = ({children}) => {
  return (
    <div style={{
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '20px',
        margin: 'auto',
        boxSizing: 'border-box'
    
    }}>{children}</div>)

}

export default Auth