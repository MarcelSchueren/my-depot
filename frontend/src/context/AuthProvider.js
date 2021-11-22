import {createContext, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({})

export default function AuthProvider({children}) {
    const [token, setToken] = useState()
    const history = useHistory()

    const login = (credentials) => {
        axios.post("auth/login", credentials)
            .then(response => response.data)
            .then(setToken)
            .then(() => history.push('/open'))
            .catch(error => console.log(error))
    }

    return (
        <AuthContext.Provider value={{token, login}}>
            {children}
        </AuthContext.Provider>
    )
}