import { createContext, useState } from "react";
import { loginRequest } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const loginfunc = async(username, password, position) => {
        const {success, user} = await loginRequest(username, password, position);
        setUser(success ? user : null)
        return success
    }

    const logout = () => setUser(null)

    return(
        <AuthContext.Provider value={{user, login: loginfunc, logout}}>
            {children}
        </AuthContext.Provider>
    )

}