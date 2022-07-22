import React,{createContext, FC, ReactNode, useState} from 'react'
export const AuthcContext = createContext({
    isAuth: false,
    updateAuth: (value: boolean) => {},
})

const AuthProvider: FC<{children: ReactNode}> = ({children}) => {
    const [isAuth, setAuth] = useState(false)

    const updateAuth = (value: boolean) => {
        setAuth(value)
    }
    return <AuthcContext.Provider value={{isAuth, updateAuth}}>
            {children}
        </AuthcContext.Provider>
    
}
export default AuthProvider