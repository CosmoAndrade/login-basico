import { createContext, useState } from "react";


export const AuthContext = createContext({})

// username: "cosmo"
// password: "1234"

export function AuthProvider({ children }) {

    const [username, setUsername] = useState('cosmo')
    const [password, setPassword] = useState('1234')
    const [logged , setLogged] = useState(false)



    return (
        <AuthContext.Provider value={{
            
            username,
            password,
            logged,
            setLogged,
           
        }}>
            {children}
        </AuthContext.Provider>
    )
}


